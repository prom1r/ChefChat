import { Body, Injectable } from '@nestjs/common';
import { GeminiProvider } from './ai.provider';

@Injectable()
export class GeminiService {
  constructor(private readonly geminiProvider: GeminiProvider) {}
  public readonly prompt = (message) => `
  You are a helpful assistant. Answer the following question: ${message}`;

  async sendMessage(@Body() body: { message: string }) {
    const model = this.geminiProvider.getModel();
    const result = await model.generateContent(this.prompt(body.message));
    return result.response.text();
  }
}
