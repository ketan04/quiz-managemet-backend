import { CreateQuestionDto } from "./create.question.dto";
import { IsNotEmpty } from "class-validator"

export class UpdateQuestionDto extends CreateQuestionDto{
    
  @IsNotEmpty()
  id: number
}