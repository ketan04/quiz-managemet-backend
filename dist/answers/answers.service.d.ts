import { AnswersRepository } from './answers.repository';
import { CreateAnswerDto } from './dto/create.answer.dto';
import { UpdateAnswerDto } from './dto/update.answer.dto';
export declare class AnswersService {
    private answerRepository;
    constructor(answerRepository: AnswersRepository);
    getanswers(): Promise<import("./answers.entity").Answer[]>;
    getAnswerById(id: string): Promise<import("./answers.entity").Answer>;
    createAnswer(createAnswerDto: CreateAnswerDto): Promise<import("./answers.entity").Answer>;
    updateAnswer(questionUpdate: UpdateAnswerDto): Promise<import("./answers.entity").Answer>;
    deleteAnswerById(id: string): Promise<import("typeorm").DeleteResult>;
}
