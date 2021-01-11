import { AnswersRepository } from './answers.repository';
import { AnswersController } from './answers.controller';
import { CreateAnswerDto } from './dto/create.answer.dto';
import { UpdateAnswerDto } from './dto/update.answer.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AnswersService {

  constructor(
    @InjectRepository(AnswersRepository)
    private answerRepository: AnswersRepository) {
  }

  async getanswers() {
    return this.answerRepository.getAnswers()
  }

  async getAnswerById(id: string) {
    const answer = await this.answerRepository.findOne({ where: { id: id} })
    if (!answer) {
      throw new NotFoundException('no answer found')
    }

    return answer
  }

  async createAnswer(createAnswerDto: CreateAnswerDto) {
    return this.answerRepository.createAnswer(createAnswerDto)
  }

  async updateAnswer(questionUpdate: UpdateAnswerDto) {
    const answer = await this.getAnswerById(questionUpdate.id)
    answer.text = questionUpdate.text
    answer.isCorrect = questionUpdate. isCorrect
    answer.isSelected = questionUpdate.isSelected
    await answer.save()

    return answer
  }

  async deleteAnswerById(id: string) {
    
    await this.getAnswerById(id)

    const result = await this.answerRepository.delete(id)
    if (result.affected == 0) {
      throw new NotFoundException('answer not found')
    }
    return result
  }
}
