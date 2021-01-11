import { CreateAnswerDto } from './dto/create.answer.dto';
import { Answer } from './answers.entity';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Answer)
export class AnswersRepository extends Repository<Answer> {

  async getAnswers() {
    const query = this.createQueryBuilder('question')
    return await query.getMany()
  }

  async createAnswer(createAnswerDto: CreateAnswerDto) {
    const answer = new Answer()
    answer.text = createAnswerDto.text
    answer.isCorrect = createAnswerDto.isCorrect
    answer.isSelected = createAnswerDto.isSelected

    await answer.save()

    return answer
  }
}