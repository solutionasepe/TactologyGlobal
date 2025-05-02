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
exports.DepartmentResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const department_service_1 = require("./department.service");
const Department_input_1 = require("./dto/Department.input");
const department_entity_1 = require("./department.entity");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let DepartmentResolver = class DepartmentResolver {
    departmentService;
    constructor(departmentService) {
        this.departmentService = departmentService;
    }
    async hello() {
        return 'Hello, World!';
    }
    createDepartment(input) {
        return this.departmentService.create(input);
    }
};
exports.DepartmentResolver = DepartmentResolver;
__decorate([
    (0, graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DepartmentResolver.prototype, "hello", null);
__decorate([
    (0, graphql_1.Mutation)(() => department_entity_1.Department),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Department_input_1.DepartmentInput]),
    __metadata("design:returntype", void 0)
], DepartmentResolver.prototype, "createDepartment", null);
exports.DepartmentResolver = DepartmentResolver = __decorate([
    (0, graphql_1.Resolver)(() => department_entity_1.Department),
    __metadata("design:paramtypes", [department_service_1.DepartmentService])
], DepartmentResolver);
//# sourceMappingURL=department.resolver.js.map