import { IsNotEmpty } from "class-validator"
import { Question } from "src/questions/questions.entity"
import { QuizType } from "src/quiztypes/quizTypes.entity"

export class CreateQuizDto {
  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  subject: string

  @IsNotEmpty()
  date : Date

  @IsNotEmpty()
  questions:Question[]

  @IsNotEmpty()
  type : QuizType
}