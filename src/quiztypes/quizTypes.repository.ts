import { CreateQuizTypeDto } from './dto/create.quiztype.dto';
import { QuizType } from './quizTypes.entity';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(QuizType)
export class QuizTypesRepository extends Repository<QuizType> {

  async getQuizTypes() {
    const query = this.createQueryBuilder('question')
    return await query.getMany()
  }

  async createQuizType(createQuizTypeDto: CreateQuizTypeDto) {

    // create a row and set the data
    const quiType = new QuizType()
    quiType.type = createQuizTypeDto.type
    await quiType.save()

    return quiType
  }
}