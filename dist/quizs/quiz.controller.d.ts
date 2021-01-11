import { QuizsService } from './quizs.service';
import { CreateQuizDto } from './dto/create.quiz.dto';
import { UpdateQuizDto } from './dto/update.quiz.dto';
export declare class QuizsController {
    private quizService;
    constructor(quizService: QuizsService);
    getQuizs(): Promise<import("./quiz.entity").Quiz[]>;
    getQuizDetailsById(id: number): Promise<import("./quiz.entity").Quiz>;
    createQuiz(createquizDto: CreateQuizDto): Promise<import("./quiz.entity").Quiz>;
    updateQuiz(quizUpdate: UpdateQuizDto): Promise<import("./quiz.entity").Quiz>;
    deleteQuizById(id: number): Promise<import("typeorm").DeleteResult>;
}
