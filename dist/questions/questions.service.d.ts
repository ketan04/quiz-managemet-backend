import { QuestionsRepository } from './questions.repository';
import { CreateQuestionDto } from './dto/create.question.dto';
import { UpdateQuestionDto } from './dto/update.question.dto';
export declare class QuestionsService {
    private questionRepository;
    constructor(questionRepository: QuestionsRepository);
    getquestions(): Promise<import("./questions.entity").Question[]>;
    getQuestionById(id: number): Promise<import("./questions.entity").Question>;
    createQuestion(createQuestionDto: CreateQuestionDto): Promise<import("./questions.entity").Question>;
    updateQuestion(questionUpdate: UpdateQuestionDto): Promise<import("./questions.entity").Question>;
    deleteQuizById(id: number): Promise<import("typeorm").DeleteResult>;
}
