import { CreateQuestionDto } from './dto/create.question.dto';
import { Question } from './questions.entity';
import { Repository } from "typeorm";
import { UpdateQuestionDto } from 'src/questions/dto/update.question.dto';
export declare class QuestionsRepository extends Repository<Question> {
    getquestions(): Promise<Question[]>;
    getquestionById(id: number): Promise<Question>;
    createQuestion(createQuestionDto: CreateQuestionDto): Promise<Question>;
    updateQuestion(questionUpdate: UpdateQuestionDto): Promise<Question>;
}
