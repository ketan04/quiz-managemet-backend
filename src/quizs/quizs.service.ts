import { QuizRepository } from './quiz.repository';
import { CreateQuizDto } from './dto/create.quiz.dto';
import { UpdateQuizDto } from './dto/update.quiz.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuizsService {

  constructor(
    @InjectRepository(QuizRepository)
    private quizRepository: QuizRepository) {
  }

  async getquizs() {
    return this.quizRepository.getquizs()
  }

  async getQuizById(id: number) {
    const quiz = await this.quizRepository.getQuizById(id)
    if (!quiz) {
      throw new NotFoundException('no quiz found')
    }

    return quiz
  }

  async createQuiz(createQuizDto: CreateQuizDto) {
    return this.quizRepository.createQuiz(createQuizDto)
  }

  async updatequiz(quizUpdate: UpdateQuizDto,) {
    return this.quizRepository.updatequiz(quizUpdate)
  }

  async deleteQuizById(id: number) {
    
    await this.getQuizById(id)

    const result = await this.quizRepository.delete(id)
    if (result.affected == 0) {
      throw new NotFoundException('quiz not found')
    }
    return result
  }
}
