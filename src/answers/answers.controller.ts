import { AnswersService } from './answers.service';
import { CreateAnswerDto } from './dto/create.answer.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UpdateAnswerDto } from './dto/update.answer.dto';

@Controller('answer')
export class AnswersController {
  constructor(
    private answerService: AnswersService) {
  }

  @Get()
  getAnswers(){
    return this.answerService.getanswers()
  }

  @Get('/:id')
  getAnswerDetailsById(
    @Param('id') id: string) {
    return this.answerService.getAnswerById(id)
  }

  @Post()
  createAnswer(
    @Body() creatanswerDto: CreateAnswerDto) {
    return this.answerService.createAnswer(creatanswerDto)
  }

  @Put()
  updateAnswer(
    @Body() answerUpdate: UpdateAnswerDto) {
    return this.answerService.updateAnswer(answerUpdate)
  }

  @Delete('/:id')
  deleteAnswerById(
    @Param('id') id: string) {
    return this.answerService.deleteAnswerById(id)
  }

}
