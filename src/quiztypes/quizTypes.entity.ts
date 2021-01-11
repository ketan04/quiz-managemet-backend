import { type } from "os";
import { Quiz } from "src/quizs/quiz.entity";
import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class QuizType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  type: string

  @OneToMany(type => Quiz, questions => questions.type , {eager:false})
  quizs: Quiz[]
}