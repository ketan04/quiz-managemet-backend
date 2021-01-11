import { Answer } from "src/answers/answers.entity";
import { BaseEntity } from "typeorm";
export declare class Question extends BaseEntity {
    id: number;
    title: string;
    answers: Answer[];
}
