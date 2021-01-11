"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz = void 0;
const questions_entity_1 = require("../questions/questions.entity");
const quizTypes_entity_1 = require("../quiztypes/quizTypes.entity");
const typeorm_1 = require("typeorm");
let Quiz = class Quiz extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Quiz.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Quiz.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Quiz.prototype, "subject", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Quiz.prototype, "date", void 0);
__decorate([
    typeorm_1.ManyToOne(type => quizTypes_entity_1.QuizType, quizType => quizType.quizs),
    __metadata("design:type", quizTypes_entity_1.QuizType)
], Quiz.prototype, "type", void 0);
__decorate([
    typeorm_1.ManyToMany(type => questions_entity_1.Question, question => question, { eager: true, cascade: true }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Quiz.prototype, "questions", void 0);
Quiz = __decorate([
    typeorm_1.Entity()
], Quiz);
exports.Quiz = Quiz;
//# sourceMappingURL=quiz.entity.js.map