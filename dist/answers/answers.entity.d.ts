import { BaseEntity } from "typeorm";
export declare class Answer extends BaseEntity {
    id: number;
    text: string;
    isSelected: boolean;
    isCorrect: boolean;
}
