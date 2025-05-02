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
exports.SubDepartmentResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const subdepartment_service_1 = require("./subdepartment.service");
const subDepartment_input_1 = require("./dto/subDepartment.input");
const subDepartment_entity_1 = require("./subDepartment.entity");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let SubDepartmentResolver = class SubDepartmentResolver {
    subdepartmentService;
    constructor(subdepartmentService) {
        this.subdepartmentService = subdepartmentService;
    }
    async hello() {
        return 'Hello, World!';
    }
    createDepartment(input) {
        return this.subdepartmentService.create(input);
    }
};
exports.SubDepartmentResolver = SubDepartmentResolver;
__decorate([
    (0, graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubDepartmentResolver.prototype, "hello", null);
__decorate([
    (0, graphql_1.Mutation)(() => subDepartment_entity_1.SubDepartment),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subDepartment_input_1.subDepartmentInput]),
    __metadata("design:returntype", void 0)
], SubDepartmentResolver.prototype, "createDepartment", null);
exports.SubDepartmentResolver = SubDepartmentResolver = __decorate([
    (0, graphql_1.Resolver)(() => subDepartment_entity_1.SubDepartment),
    __metadata("design:paramtypes", [subdepartment_service_1.subDepartmentService])
], SubDepartmentResolver);
//# sourceMappingURL=subdepartment.resolver.js.map