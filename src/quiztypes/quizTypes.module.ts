import { QuizTypesRepository } from './quizTypes.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { QuiztypesController } from './quizTypes.controller';
import { QuizTypesService } from './quizTypes.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([QuizTypesRepository])
  ],
  controllers: [QuiztypesController],
  providers: [QuizTypesService]
})
export class QuizTypesModule { }
