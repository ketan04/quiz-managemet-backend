import { CreateQuizDto } from './dto/create.quiz.dto';
import { UpdateQuizDto } from './dto/update.quiz.dto';
import { Quiz } from './quiz.entity';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Quiz)
export class QuizRepository extends Repository<Quiz> {

  async getquizs() {
    const query = this.createQueryBuilder('quiz').leftJoinAndSelect('quiz.type', 'type').leftJoinAndSelect('quiz.questions','questions')

    return await query.getMany()
  }

  async getQuizById(quizId: number){
    const query = this.createQueryBuilder('quiz').leftJoinAndSelect('quiz.type', 'type').leftJoinAndSelect('quiz.questions','questions').whereInIds(quizId)
    return query.getOne()
  }

  async createQuiz(createQuizDto: CreateQuizDto) {

    // create a row and set the data
    const quiz = new Quiz()
    quiz.title = createQuizDto.title
    quiz.subject = createQuizDto.subject
    quiz.date = createQuizDto.date
    quiz.questions = createQuizDto.questions
    quiz.type = createQuizDto.type

    await quiz.save()

    return quiz
  }

  async updatequiz(quizUpdate: UpdateQuizDto,) {
    const quiz = await this.getQuizById(quizUpdate.id)
    quiz.title = quizUpdate.title
    quiz.subject = quizUpdate. subject
    quiz.date = quizUpdate.date
    quiz.questions = quiz.questions.concat(quizUpdate.questions.filter(o=>quiz.questions.includes(o)))
    quiz.type = quiz.type
    await quiz.save()

    return quiz
  }
}