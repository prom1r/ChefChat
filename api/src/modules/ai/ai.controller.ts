import { Body, Controller, Post } from '@nestjs/common';
import { GeminiService } from './ai.service';

@Controller('ai')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Post('message')
  sendMessage(@Body() body: { message: string }) {
    return this.geminiService.sendMessage({
      message: body.message,
    });
  }
}
