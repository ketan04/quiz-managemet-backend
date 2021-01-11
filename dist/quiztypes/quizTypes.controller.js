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
exports.QuiztypesController = void 0;
const quizTypes_service_1 = require("./quizTypes.service");
const create_quiztype_dto_1 = require("./dto/create.quiztype.dto");
const common_1 = require("@nestjs/common");
const update_quiztype_dto_1 = require("./dto/update.quiztype.dto");
let QuiztypesController = class QuiztypesController {
    constructor(quizTypeService) {
        this.quizTypeService = quizTypeService;
    }
    getQuizTypes() {
        return this.quizTypeService.getQuizTypes();
    }
    getQuiztypeById(id) {
        return this.quizTypeService.getQuizTypeById(id);
    }
    createQuizType(creatquizTypeDto) {
        return this.quizTypeService.createQuizType(creatquizTypeDto);
    }
    updateQuizType(quizTypeUpdate) {
        return this.quizTypeService.updateQuizType(quizTypeUpdate);
    }
    deleteQuiztypeById(id) {
        return this.quizTypeService.deleteAnswerById(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuiztypesController.prototype, "getQuizTypes", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuiztypesController.prototype, "getQuiztypeById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_quiztype_dto_1.CreateQuizTypeDto]),
    __metadata("design:returntype", void 0)
], QuiztypesController.prototype, "createQuizType", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_quiztype_dto_1.UpdateQuizTypeDto]),
    __metadata("design:returntype", void 0)
], QuiztypesController.prototype, "updateQuizType", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuiztypesController.prototype, "deleteQuiztypeById", null);
QuiztypesController = __decorate([
    common_1.Controller('quiztype'),
    __metadata("design:paramtypes", [quizTypes_service_1.QuizTypesService])
], QuiztypesController);
exports.QuiztypesController = QuiztypesController;
//# sourceMappingURL=quizTypes.controller.js.map