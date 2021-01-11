import { AnswersService } from './answers.service';
import { CreateAnswerDto } from './dto/create.answer.dto';
import { UpdateAnswerDto } from './dto/update.answer.dto';
export declare class AnswersController {
    private answerService;
    constructor(answerService: AnswersService);
    getAnswers(): Promise<import("./answers.entity").Answer[]>;
    getAnswerDetailsById(id: string): Promise<import("./answers.entity").Answer>;
    createAnswer(creatanswerDto: CreateAnswerDto): Promise<import("./answers.entity").Answer>;
    updateAnswer(answerUpdate: UpdateAnswerDto): Promise<import("./answers.entity").Answer>;
    deleteAnswerById(id: string): Promise<import("typeorm").DeleteResult>;
}
