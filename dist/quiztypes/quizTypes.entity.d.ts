import { Quiz } from "src/quizs/quiz.entity";
import { BaseEntity } from "typeorm";
export declare class QuizType extends BaseEntity {
    id: number;
    type: string;
    quizs: Quiz[];
}
