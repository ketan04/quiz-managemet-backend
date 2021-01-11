import { AnswersRepository } from './answers.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AnswersController } from './answers.controller';
import { AnswersService } from './answers.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnswersRepository])
  ],
  controllers: [AnswersController],
  providers: [AnswersService]
})
export class AnswersModule { }
