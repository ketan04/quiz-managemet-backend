import { CreateAnswerDto } from './dto/create.answer.dto';
import { Answer } from './answers.entity';
import { Repository } from "typeorm";
export declare class AnswersRepository extends Repository<Answer> {
    getAnswers(): Promise<Answer[]>;
    createAnswer(createAnswerDto: CreateAnswerDto): Promise<Answer>;
}
