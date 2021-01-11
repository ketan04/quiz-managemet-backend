import { QuizTypesRepository } from './quizTypes.repository';
import { CreateQuizTypeDto } from './dto/create.quiztype.dto';
import { UpdateQuizTypeDto } from './dto/update.quiztype.dto';
export declare class QuizTypesService {
    private quizTypeRepository;
    constructor(quizTypeRepository: QuizTypesRepository);
    getQuizTypes(): Promise<import("./quizTypes.entity").QuizType[]>;
    getQuizTypeById(id: string): Promise<import("./quizTypes.entity").QuizType>;
    createQuizType(createQuizTypeDto: CreateQuizTypeDto): Promise<import("./quizTypes.entity").QuizType>;
    updateQuizType(quizTypeUpdate: UpdateQuizTypeDto): Promise<import("./quizTypes.entity").QuizType>;
    deleteAnswerById(id: string): Promise<import("typeorm").DeleteResult>;
}
