"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsRepository = void 0;
const questions_entity_1 = require("./questions.entity");
const typeorm_1 = require("typeorm");
const update_question_dto_1 = require("./dto/update.question.dto");
let QuestionsRepository = class QuestionsRepository extends typeorm_1.Repository {
    async getquestions() {
        const query = this.createQueryBuilder('question').leftJoinAndSelect('question.answers', 'answers');
        return await query.getMany();
    }
    async getquestionById(id) {
        const query = this.createQueryBuilder('question').leftJoinAndSelect('question.answers', 'answers').whereInIds(id);
        return await query.getOne();
    }
    async createQuestion(createQuestionDto) {
        const question = new questions_entity_1.Question();
        question.title = createQuestionDto.title;
        question.title = createQuestionDto.title;
        question.answers = createQuestionDto.answers;
        await question.save();
        return question;
    }
    async updateQuestion(questionUpdate) {
        const questions = await this.getquestionById(questionUpdate.id);
        questions.title = questionUpdate.title;
        questions.answers = questions.answers.concat(questionUpdate.answers.filter(o => !questions.answers.includes(o)));
        await questions.save();
        return questions;
    }
};
QuestionsRepository = __decorate([
    typeorm_1.EntityRepository(questions_entity_1.Question)
], QuestionsRepository);
exports.QuestionsRepository = QuestionsRepository;
//# sourceMappingURL=questions.repository.js.map