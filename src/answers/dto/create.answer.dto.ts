import { IsNotEmpty } from "class-validator"
  
export class CreateAnswerDto {
  @IsNotEmpty()
  text: string
  isSelected: boolean = false
  isCorrect: boolean = false
}