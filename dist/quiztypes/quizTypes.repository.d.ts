import { CreateQuizTypeDto } from './dto/create.quiztype.dto';
import { QuizType } from './quizTypes.entity';
import { Repository } from "typeorm";
export declare class QuizTypesRepository extends Repository<QuizType> {
    getQuizTypes(): Promise<QuizType[]>;
    createQuizType(createQuizTypeDto: CreateQuizTypeDto): Promise<QuizType>;
}
