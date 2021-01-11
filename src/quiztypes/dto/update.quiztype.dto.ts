import { CreateQuizTypeDto } from "./create.quiztype.dto";
import { IsNotEmpty } from "class-validator"

export class UpdateQuizTypeDto extends CreateQuizTypeDto{
    
  @IsNotEmpty()
  id: string
}