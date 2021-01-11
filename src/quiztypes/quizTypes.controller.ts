import { QuizTypesService } from './quizTypes.service';
import { CreateQuizTypeDto } from './dto/create.quiztype.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UpdateQuizTypeDto } from './dto/update.quiztype.dto';

@Controller('quiztype')
export class QuiztypesController {
  constructor(
    private quizTypeService: QuizTypesService) {
  }

  @Get()
  getQuizTypes(){
    return this.quizTypeService.getQuizTypes()
  }

  @Get('/:id')
  getQuiztypeById(
    @Param('id') id: string) {
    return this.quizTypeService.getQuizTypeById(id)
  }

  @Post()
  createQuizType(
    @Body() creatquizTypeDto: CreateQuizTypeDto) {
    return this.quizTypeService.createQuizType(creatquizTypeDto)
  }

  @Put()
  updateQuizType(
    @Body() quizTypeUpdate: UpdateQuizTypeDto) {
    return this.quizTypeService.updateQuizType(quizTypeUpdate)
  }

  @Delete('/:id')
  deleteQuiztypeById(
    @Param('id') id: string) {
    return this.quizTypeService.deleteAnswerById(id)
  }

}
