import { Body, Injectable } from '@nestjs/common';
import { GeminiProvider } from './ai.provider';
import { systemPrompt } from './prompt';

type Message = { role: 'user' | 'assistant'; content: string };

@Injectable()
export class GeminiService {
  private conversationHistory: Message[] = [];

  constructor(private readonly geminiProvider: GeminiProvider) {}

  async sendMessage(@Body() body: { message: string }) {
    const userMessage: Message = { role: 'user', content: body.message };
    this.conversationHistory.push(userMessage);

    const model = this.geminiProvider.getModel();
    const fullPrompt = [
      systemPrompt,
      ...this.conversationHistory.map((msg) => {
        return `${msg.role === 'user' ? 'Пользователь' : 'Ассистент'}: ${msg.content}`;
      }),
    ].join('\n');

    const result = await model.generateContent(fullPrompt);
    if (!result.response) {
      throw new Error('No response from the model');
    }

    const assistantReply = result.response.text();

    this.conversationHistory.push({
      role: 'assistant',
      content: assistantReply,
    });

    return assistantReply;
  }
}
