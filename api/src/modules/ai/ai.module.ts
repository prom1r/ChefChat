import { Module } from '@nestjs/common';
import { GeminiService } from './ai.service';
import { GeminiController } from './ai.controller';
import { GeminiProvider } from './ai.provider';

@Module({
  controllers: [GeminiController],
  providers: [GeminiService, GeminiProvider],
})
export class AiModule {}
