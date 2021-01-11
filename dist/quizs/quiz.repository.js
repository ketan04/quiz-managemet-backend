"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizRepository = void 0;
const quiz_entity_1 = require("./quiz.entity");
const typeorm_1 = require("typeorm");
let QuizRepository = class QuizRepository extends typeorm_1.Repository {
    async getquizs() {
        const query = this.createQueryBuilder('quiz').leftJoinAndSelect('quiz.type', 'type').leftJoinAndSelect('quiz.questions', 'questions');
        return await query.getMany();
    }
    async getQuizById(quizId) {
        const query = this.createQueryBuilder('quiz').leftJoinAndSelect('quiz.type', 'type').leftJoinAndSelect('quiz.questions', 'questions').whereInIds(quizId);
        return query.getOne();
    }
    async createQuiz(createQuizDto) {
        const quiz = new quiz_entity_1.Quiz();
        quiz.title = createQuizDto.title;
        quiz.subject = createQuizDto.subject;
        quiz.date = createQuizDto.date;
        quiz.questions = createQuizDto.questions;
        quiz.type = createQuizDto.type;
        await quiz.save();
        return quiz;
    }
    async updatequiz(quizUpdate) {
        const quiz = await this.getQuizById(quizUpdate.id);
        quiz.title = quizUpdate.title;
        quiz.subject = quizUpdate.subject;
        quiz.date = quizUpdate.date;
        quiz.questions = quiz.questions.concat(quizUpdate.questions.filter(o => quiz.questions.includes(o)));
        quiz.type = quiz.type;
        await quiz.save();
        return quiz;
    }
};
QuizRepository = __decorate([
    typeorm_1.EntityRepository(quiz_entity_1.Quiz)
], QuizRepository);
exports.QuizRepository = QuizRepository;
//# sourceMappingURL=quiz.repository.js.map