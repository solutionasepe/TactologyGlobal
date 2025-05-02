"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubDepartmentModule = void 0;
const common_1 = require("@nestjs/common");
const subdepartment_controller_1 = require("./subdepartment.controller");
const subdepartment_resolver_1 = require("./subdepartment.resolver");
const subdepartment_service_1 = require("./subdepartment.service");
const typeorm_1 = require("@nestjs/typeorm");
const subDepartment_entity_1 = require("./subDepartment.entity");
const auth_module_1 = require("../auth/auth.module");
let SubDepartmentModule = class SubDepartmentModule {
};
exports.SubDepartmentModule = SubDepartmentModule;
exports.SubDepartmentModule = SubDepartmentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([subDepartment_entity_1.SubDepartment]),
            auth_module_1.AuthModule,
        ],
        controllers: [subdepartment_controller_1.SubDepartmentsController],
        providers: [subdepartment_service_1.subDepartmentService, subdepartment_resolver_1.SubDepartmentResolver],
    })
], SubDepartmentModule);
//# sourceMappingURL=subdepartment.module.js.map