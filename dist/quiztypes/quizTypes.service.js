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
exports.QuizTypesService = void 0;
const quizTypes_repository_1 = require("./quizTypes.repository");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let QuizTypesService = class QuizTypesService {
    constructor(quizTypeRepository) {
        this.quizTypeRepository = quizTypeRepository;
    }
    async getQuizTypes() {
        return this.quizTypeRepository.getQuizTypes();
    }
    async getQuizTypeById(id) {
        const answer = await this.quizTypeRepository.findOne({ where: { id: id } });
        if (!answer) {
            throw new common_1.NotFoundException('no quiz type found');
        }
        return answer;
    }
    async createQuizType(createQuizTypeDto) {
        return this.quizTypeRepository.createQuizType(createQuizTypeDto);
    }
    async updateQuizType(quizTypeUpdate) {
        const quizType = await this.getQuizTypeById(quizTypeUpdate.id);
        quizType.type = quizTypeUpdate.type;
        await quizType.save();
        return quizType;
    }
    async deleteAnswerById(id) {
        await this.getQuizTypeById(id);
        const result = await this.quizTypeRepository.delete(id);
        if (result.affected == 0) {
            throw new common_1.NotFoundException('quiz type not found');
        }
        return result;
    }
};
QuizTypesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(quizTypes_repository_1.QuizTypesRepository)),
    __metadata("design:paramtypes", [quizTypes_repository_1.QuizTypesRepository])
], QuizTypesService);
exports.QuizTypesService = QuizTypesService;
//# sourceMappingURL=quizTypes.service.js.map