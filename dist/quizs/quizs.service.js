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
exports.QuizsService = void 0;
const quiz_repository_1 = require("./quiz.repository");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let QuizsService = class QuizsService {
    constructor(quizRepository) {
        this.quizRepository = quizRepository;
    }
    async getquizs() {
        return this.quizRepository.getquizs();
    }
    async getQuizById(id) {
        const quiz = await this.quizRepository.getQuizById(id);
        if (!quiz) {
            throw new common_1.NotFoundException('no quiz found');
        }
        return quiz;
    }
    async createQuiz(createQuizDto) {
        return this.quizRepository.createQuiz(createQuizDto);
    }
    async updatequiz(quizUpdate) {
        return this.quizRepository.updatequiz(quizUpdate);
    }
    async deleteQuizById(id) {
        await this.getQuizById(id);
        const result = await this.quizRepository.delete(id);
        if (result.affected == 0) {
            throw new common_1.NotFoundException('quiz not found');
        }
        return result;
    }
};
QuizsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(quiz_repository_1.QuizRepository)),
    __metadata("design:paramtypes", [quiz_repository_1.QuizRepository])
], QuizsService);
exports.QuizsService = QuizsService;
//# sourceMappingURL=quizs.service.js.map