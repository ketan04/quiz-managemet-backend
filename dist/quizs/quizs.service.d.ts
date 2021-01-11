import { QuizRepository } from './quiz.repository';
import { CreateQuizDto } from './dto/create.quiz.dto';
import { UpdateQuizDto } from './dto/update.quiz.dto';
export declare class QuizsService {
    private quizRepository;
    constructor(quizRepository: QuizRepository);
    getquizs(): Promise<import("./quiz.entity").Quiz[]>;
    getQuizById(id: number): Promise<import("./quiz.entity").Quiz>;
    createQuiz(createQuizDto: CreateQuizDto): Promise<import("./quiz.entity").Quiz>;
    updatequiz(quizUpdate: UpdateQuizDto): Promise<import("./quiz.entity").Quiz>;
    deleteQuizById(id: number): Promise<import("typeorm").DeleteResult>;
}
