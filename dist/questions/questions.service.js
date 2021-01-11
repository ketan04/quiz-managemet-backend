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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsService = void 0;
const questions_repository_1 = require("./questions.repository");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let QuestionsService = class QuestionsService {
    constructor(questionRepository) {
        this.questionRepository = questionRepository;
    }
    async getquestions() {
        return this.questionRepository.getquestions();
    }
    async getQuestionById(id) {
        const question = await this.questionRepository.getquestionById(id);
        if (!question) {
            throw new common_1.NotFoundException('no question found');
        }
        return question;
    }
    async createQuestion(createQuestionDto) {
        return this.questionRepository.createQuestion(createQuestionDto);
    }
    async updateQuestion(questionUpdate) {
        return this.questionRepository.updateQuestion(questionUpdate);
    }
    async deleteQuizById(id) {
        await this.getQuestionById(id);
        const result = await this.questionRepository.delete(id);
        if (result.affected == 0) {
            throw new common_1.NotFoundException('question not found');
        }
        return result;
    }
};
QuestionsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(questions_repository_1.QuestionsRepository)),
    __metadata("design:paramtypes", [questions_repository_1.QuestionsRepository])
], QuestionsService);
exports.QuestionsService = QuestionsService;
//# sourceMappingURL=questions.service.js.map