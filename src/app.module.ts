import { TypeORMConfiguration } from './config/typeorm.config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizsModule } from './quizs/quizs.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';
import {QuizTypesModule} from './quiztypes/quizTypes.module'


@Module({
  imports: [
    QuizsModule,
    QuestionsModule,
    AnswersModule,
    QuizTypesModule,
    TypeOrmModule.forRoot(TypeORMConfiguration)
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
