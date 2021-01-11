"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizTypesModule = void 0;
const quizTypes_repository_1 = require("./quizTypes.repository");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const quizTypes_controller_1 = require("./quizTypes.controller");
const quizTypes_service_1 = require("./quizTypes.service");
let QuizTypesModule = class QuizTypesModule {
};
QuizTypesModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([quizTypes_repository_1.QuizTypesRepository])
        ],
        controllers: [quizTypes_controller_1.QuiztypesController],
        providers: [quizTypes_service_1.QuizTypesService]
    })
], QuizTypesModule);
exports.QuizTypesModule = QuizTypesModule;
//# sourceMappingURL=quizTypes.module.js.map