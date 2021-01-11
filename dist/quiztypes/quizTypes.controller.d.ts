import { QuizTypesService } from './quizTypes.service';
import { CreateQuizTypeDto } from './dto/create.quiztype.dto';
import { UpdateQuizTypeDto } from './dto/update.quiztype.dto';
export declare class QuiztypesController {
    private quizTypeService;
    constructor(quizTypeService: QuizTypesService);
    getQuizTypes(): Promise<import("./quizTypes.entity").QuizType[]>;
    getQuiztypeById(id: string): Promise<import("./quizTypes.entity").QuizType>;
    createQuizType(creatquizTypeDto: CreateQuizTypeDto): Promise<import("./quizTypes.entity").QuizType>;
    updateQuizType(quizTypeUpdate: UpdateQuizTypeDto): Promise<import("./quizTypes.entity").QuizType>;
    deleteQuiztypeById(id: string): Promise<import("typeorm").DeleteResult>;
}
