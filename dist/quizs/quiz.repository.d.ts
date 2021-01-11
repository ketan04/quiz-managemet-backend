import { CreateQuizDto } from './dto/create.quiz.dto';
import { UpdateQuizDto } from './dto/update.quiz.dto';
import { Quiz } from './quiz.entity';
import { Repository } from "typeorm";
export declare class QuizRepository extends Repository<Quiz> {
    getquizs(): Promise<Quiz[]>;
    getQuizById(quizId: number): Promise<Quiz>;
    createQuiz(createQuizDto: CreateQuizDto): Promise<Quiz>;
    updatequiz(quizUpdate: UpdateQuizDto): Promise<Quiz>;
}
