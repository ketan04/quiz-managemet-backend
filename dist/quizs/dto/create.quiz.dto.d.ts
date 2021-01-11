import { Question } from "src/questions/questions.entity";
import { QuizType } from "src/quiztypes/quizTypes.entity";
export declare class CreateQuizDto {
    title: string;
    subject: string;
    date: Date;
    questions: Question[];
    type: QuizType;
}
