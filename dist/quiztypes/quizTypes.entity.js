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
exports.QuizType = void 0;
const quiz_entity_1 = require("../quizs/quiz.entity");
const typeorm_1 = require("typeorm");
let QuizType = class QuizType extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], QuizType.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], QuizType.prototype, "type", void 0);
__decorate([
    typeorm_1.OneToMany(type => quiz_entity_1.Quiz, questions => questions.type, { eager: false }),
    __metadata("design:type", Array)
], QuizType.prototype, "quizs", void 0);
QuizType = __decorate([
    typeorm_1.Entity()
], QuizType);
exports.QuizType = QuizType;
//# sourceMappingURL=quizTypes.entity.js.map