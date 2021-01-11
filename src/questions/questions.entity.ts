import { type } from "os";
import { Answer } from "src/answers/answers.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @ManyToMany(type => Answer, answers => answers, {cascade: true})
  @JoinTable()
  answers: Answer[]
}