import { IsNotEmpty } from "class-validator"
  
export class CreateQuizTypeDto {
  @IsNotEmpty()
  type: string
}