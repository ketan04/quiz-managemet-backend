import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create.question.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UpdateQuestionDto } from './dto/update.question.dto';

@Controller('question')
export class QuestionsController {
  constructor(
    private questionService: QuestionsService) {
  }

  @Get()
  getQuestions(){
    return this.questionService.getquestions()
  }

  @Get('/:id')
  getQuestionDetailsById(
    @Param('id') id: number) {
    return this.questionService.getQuestionById(id)
  }

  @Post()
  createQuestion(
    @Body() createquestionDto: CreateQuestionDto) {
    return this.questionService.createQuestion(createquestionDto)
  }

  @Put()
  updateQuestion(
    @Body() questionUpdate: UpdateQuestionDto) {
    return this.questionService.updateQuestion(questionUpdate)
  }

  @Delete('/:id')
  deleteQuestionById(
    @Param('id') id: number) {
    return this.questionService.deleteQuizById(id)
  }

}
