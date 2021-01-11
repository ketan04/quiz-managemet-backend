import { Question } from "src/questions/questions.entity";
import { QuizType } from "src/quiztypes/quizTypes.entity";
import { BaseEntity } from "typeorm";
export declare class Quiz extends BaseEntity {
    id: number;
    title: string;
    subject: string;
    date: Date;
    type: QuizType;
    questions: Question[];
}
