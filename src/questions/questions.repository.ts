import { CreateQuestionDto } from './dto/create.question.dto';
import { Question } from './questions.entity';
import { EntityRepository, Repository } from "typeorm";
import {UpdateQuestionDto}from 'src/questions/dto/update.question.dto';

@EntityRepository(Question)
export class QuestionsRepository extends Repository<Question> {

  async getquestions() {
    const query = this.createQueryBuilder('question').leftJoinAndSelect('question.answers','answers')
    return await query.getMany()
  }

  async getquestionById(id:number) {
    const query = this.createQueryBuilder('question').leftJoinAndSelect('question.answers','answers').whereInIds(id)
    return await query.getOne()
  }

  async createQuestion(createQuestionDto: CreateQuestionDto) {

    // create a row and set the data
    const question = new Question()
    question.title = createQuestionDto.title
    question.title = createQuestionDto.title
    question.answers =createQuestionDto.answers

    await question.save()

    return question
  }

  async updateQuestion(questionUpdate: UpdateQuestionDto,) {
    const questions = await this.getquestionById(questionUpdate.id)
    questions.title = questionUpdate.title
    questions.answers = questions.answers.concat(questionUpdate. answers.filter(o => !questions.answers.includes(o)))
    await questions.save()

    return questions
  }

}