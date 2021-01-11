import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create.question.dto';
import { UpdateQuestionDto } from './dto/update.question.dto';
export declare class QuestionsController {
    private questionService;
    constructor(questionService: QuestionsService);
    getQuestions(): Promise<import("./questions.entity").Question[]>;
    getQuestionDetailsById(id: number): Promise<import("./questions.entity").Question>;
    createQuestion(createquestionDto: CreateQuestionDto): Promise<import("./questions.entity").Question>;
    updateQuestion(questionUpdate: UpdateQuestionDto): Promise<import("./questions.entity").Question>;
    deleteQuestionById(id: number): Promise<import("typeorm").DeleteResult>;
}
