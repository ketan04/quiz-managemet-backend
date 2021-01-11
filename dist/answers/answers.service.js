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
exports.AnswersService = void 0;
const answers_repository_1 = require("./answers.repository");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let AnswersService = class AnswersService {
    constructor(answerRepository) {
        this.answerRepository = answerRepository;
    }
    async getanswers() {
        return this.answerRepository.getAnswers();
    }
    async getAnswerById(id) {
        const answer = await this.answerRepository.findOne({ where: { id: id } });
        if (!answer) {
            throw new common_1.NotFoundException('no answer found');
        }
        return answer;
    }
    async createAnswer(createAnswerDto) {
        return this.answerRepository.createAnswer(createAnswerDto);
    }
    async updateAnswer(questionUpdate) {
        const answer = await this.getAnswerById(questionUpdate.id);
        answer.text = questionUpdate.text;
        answer.isCorrect = questionUpdate.isCorrect;
        answer.isSelected = questionUpdate.isSelected;
        await answer.save();
        return answer;
    }
    async deleteAnswerById(id) {
        await this.getAnswerById(id);
        const result = await this.answerRepository.delete(id);
        if (result.affected == 0) {
            throw new common_1.NotFoundException('answer not found');
        }
        return result;
    }
};
AnswersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(answers_repository_1.AnswersRepository)),
    __metadata("design:paramtypes", [answers_repository_1.AnswersRepository])
], AnswersService);
exports.AnswersService = AnswersService;
//# sourceMappingURL=answers.service.js.map