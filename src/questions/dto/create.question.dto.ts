import { IsNotEmpty } from "class-validator"
import { Answer } from "src/answers/answers.entity"

export class CreateQuestionDto {
  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  answers: Answer[]
  
}