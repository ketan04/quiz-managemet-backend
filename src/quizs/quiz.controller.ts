import { QuizsService } from './quizs.service';
import { CreateQuizDto } from './dto/create.quiz.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UpdateQuizDto } from './dto/update.quiz.dto';

@Controller('quiz')
export class QuizsController {
  constructor(
    private quizService: QuizsService) {
  }

  @Get()
  getQuizs(){
    return this.quizService.getquizs()
  }

  @Get('/:id')
  getQuizDetailsById(
    @Param('id') id: number) {
    return this.quizService.getQuizById(id)
  }

  @Post()
  createQuiz(
    @Body() createquizDto: CreateQuizDto) {
    return this.quizService.createQuiz(createquizDto)
  }

  @Put()
  updateQuiz(
    @Body() quizUpdate: UpdateQuizDto) {
    return this.quizService.updatequiz(quizUpdate)
  }

  @Delete('/:id')
  deleteQuizById(
    @Param('id') id: number) {
    return this.quizService.deleteQuizById(id)
  }

}
