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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
const typeorm_1 = require("typeorm");
const subDepartment_entity_1 = require("./subDepartment.entity");
const graphql_1 = require("@nestjs/graphql");
let Department = class Department {
    id;
    name;
    subDepartments;
};
exports.Department = Department;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Department.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Department.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => [subDepartment_entity_1.SubDepartment], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => subDepartment_entity_1.SubDepartment, sub => sub.department, { cascade: true }),
    __metadata("design:type", Array)
], Department.prototype, "subDepartments", void 0);
exports.Department = Department = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Department);
//# sourceMappingURL=department.entity.js.map