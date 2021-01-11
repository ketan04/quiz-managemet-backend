import { QuestionsRepository } from './questions.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([QuestionsRepository])
  ],
  controllers: [QuestionsController],
  providers: [QuestionsService]
})
export class QuestionsModule { }
