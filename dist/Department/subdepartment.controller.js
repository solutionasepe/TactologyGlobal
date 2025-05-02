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
exports.SubDepartmentsController = void 0;
const common_1 = require("@nestjs/common");
const subdepartment_service_1 = require("./subdepartment.service");
const subDepartment_input_1 = require("./dto/subDepartment.input");
const passport_1 = require("@nestjs/passport");
let SubDepartmentsController = class SubDepartmentsController {
    subdepartmentService;
    constructor(subdepartmentService) {
        this.subdepartmentService = subdepartmentService;
    }
    async create(body) {
        return this.subdepartmentService.create(body);
    }
};
exports.SubDepartmentsController = SubDepartmentsController;
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)('test'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subDepartment_input_1.subDepartmentInput]),
    __metadata("design:returntype", Promise)
], SubDepartmentsController.prototype, "create", null);
exports.SubDepartmentsController = SubDepartmentsController = __decorate([
    (0, common_1.Controller)('subdepartments'),
    __metadata("design:paramtypes", [subdepartment_service_1.subDepartmentService])
], SubDepartmentsController);
//# sourceMappingURL=subdepartment.controller.js.map