"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsModule = void 0;
const common_1 = require("@nestjs/common");
const department_resolver_1 = require("./department.resolver");
const department_service_1 = require("./department.service");
const department_controller_1 = require("./department.controller");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const department_entity_1 = require("./department.entity");
let DepartmentsModule = class DepartmentsModule {
};
exports.DepartmentsModule = DepartmentsModule;
exports.DepartmentsModule = DepartmentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([department_entity_1.Department]),
            auth_module_1.AuthModule
        ],
        controllers: [department_controller_1.DepartmentsController],
        providers: [department_service_1.DepartmentService, department_resolver_1.DepartmentResolver]
    })
], DepartmentsModule);
//# sourceMappingURL=department.module.js.map