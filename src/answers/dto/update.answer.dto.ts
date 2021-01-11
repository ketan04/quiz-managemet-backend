import { CreateAnswerDto } from "./create.answer.dto";
import { IsNotEmpty } from "class-validator"

export class UpdateAnswerDto extends CreateAnswerDto{
    
  @IsNotEmpty()
  id: string
}