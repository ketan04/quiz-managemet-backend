import { QuizRepository } from './quiz.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { QuizsController } from './quiz.controller';
import { QuizsService } from './quizs.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([QuizRepository])
  ],
  controllers: [QuizsController],
  providers: [QuizsService]
})
export class QuizsModule { }
