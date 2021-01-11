import { CreateQuizDto } from "./create.quiz.dto";
import { IsNotEmpty } from "class-validator"

export class UpdateQuizDto extends CreateQuizDto{
    
  @IsNotEmpty()
  id: number
}