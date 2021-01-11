import { type } from "os";
import { Question } from "src/questions/questions.entity";
import { QuizType } from "src/quiztypes/quizTypes.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  subject: string

  @Column()
  date: Date

  @ManyToOne(type => QuizType, quizType => quizType.quizs)
  type:QuizType

  @ManyToMany(type => Question,  question =>question, {eager:true,cascade:true})
  @JoinTable()
  questions:Question[]
}