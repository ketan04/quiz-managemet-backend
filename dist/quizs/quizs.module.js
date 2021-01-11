"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizsModule = void 0;
const quiz_repository_1 = require("./quiz.repository");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const quiz_controller_1 = require("./quiz.controller");
const quizs_service_1 = require("./quizs.service");
let QuizsModule = class QuizsModule {
};
QuizsModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([quiz_repository_1.QuizRepository])
        ],
        controllers: [quiz_controller_1.QuizsController],
        providers: [quizs_service_1.QuizsService]
    })
], QuizsModule);
exports.QuizsModule = QuizsModule;
//# sourceMappingURL=quizs.module.js.map