import { QuizTypesRepository } from './quizTypes.repository';
import { CreateQuizTypeDto } from './dto/create.quiztype.dto';
import { UpdateQuizTypeDto } from './dto/update.quiztype.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuizTypesService {

  constructor(
    @InjectRepository(QuizTypesRepository)
    private quizTypeRepository: QuizTypesRepository) {
  }

  async getQuizTypes() {
    return this.quizTypeRepository.getQuizTypes()
  }

  async getQuizTypeById(id: string) {
    const answer = await this.quizTypeRepository.findOne({ where: { id: id} })
    if (!answer) {
      throw new NotFoundException('no quiz type found')
    }

    return answer
  }

  async createQuizType(createQuizTypeDto: CreateQuizTypeDto) {
    return this.quizTypeRepository.createQuizType(createQuizTypeDto)
  }

  async updateQuizType(quizTypeUpdate: UpdateQuizTypeDto) {
    const quizType = await this.getQuizTypeById(quizTypeUpdate.id)
    quizType.type = quizTypeUpdate.type
    await quizType.save()

    return quizType
  }

  async deleteAnswerById(id: string) {
    
    await this.getQuizTypeById(id)

    const result = await this.quizTypeRepository.delete(id)
    if (result.affected == 0) {
      throw new NotFoundException('quiz type not found')
    }
    return result
  }
}
