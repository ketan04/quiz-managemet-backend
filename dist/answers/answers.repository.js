"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswersRepository = void 0;
const answers_entity_1 = require("./answers.entity");
const typeorm_1 = require("typeorm");
let AnswersRepository = class AnswersRepository extends typeorm_1.Repository {
    async getAnswers() {
        const query = this.createQueryBuilder('question');
        return await query.getMany();
    }
    async createAnswer(createAnswerDto) {
        const answer = new answers_entity_1.Answer();
        answer.text = createAnswerDto.text;
        answer.isCorrect = createAnswerDto.isCorrect;
        answer.isSelected = createAnswerDto.isSelected;
        await answer.save();
        return answer;
    }
};
AnswersRepository = __decorate([
    typeorm_1.EntityRepository(answers_entity_1.Answer)
], AnswersRepository);
exports.AnswersRepository = AnswersRepository;
//# sourceMappingURL=answers.repository.js.map