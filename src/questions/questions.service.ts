import { QuestionsRepository } from './questions.repository';
import { QuestionsController } from './questions.controller';
import { CreateQuestionDto } from './dto/create.question.dto';
import { UpdateQuestionDto } from './dto/update.question.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuestionsService {

  constructor(
    @InjectRepository(QuestionsRepository)
    private questionRepository: QuestionsRepository) {
  }

  async getquestions() {
    return this.questionRepository.getquestions()
  }

  async getQuestionById(id: number) {
    const question = await this.questionRepository.getquestionById(id)
    if (!question) {
      throw new NotFoundException('no question found')
    }

    return question
  }

  async createQuestion(createQuestionDto: CreateQuestionDto) {
    return this.questionRepository.createQuestion(createQuestionDto)
  }

  async updateQuestion(questionUpdate: UpdateQuestionDto,) {
    return this.questionRepository.updateQuestion(questionUpdate)
  }

  async deleteQuizById(id: number) {
    
    await this.getQuestionById(id)

    const result = await this.questionRepository.delete(id)
    if (result.affected == 0) {
      throw new NotFoundException('question not found')
    }
    return result
  }
}
