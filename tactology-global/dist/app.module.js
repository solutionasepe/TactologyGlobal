"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const apollo_1 = require("@nestjs/apollo");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const subdepartment_module_1 = require("./Department/subdepartment.module");
const department_module_1 = require("./Department/department.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: "postgres",
                url: "postgresql://tactologydb_user:DNJlO081rWxEIJ4EcNUjYcbOdq0PlYUl@dpg-d0a7u78gjchc73btkorg-a.oregon-postgres.render.com/tactologydb",
                ssl: { rejectUnauthorized: false },
                port: 5432,
                username: "tactologydb_user",
                password: "DNJlO081rWxEIJ4EcNUjYcbOdq0PlYUl",
                database: "tactologydb",
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
                logging: true
            }),
            auth_module_1.AuthModule,
            subdepartment_module_1.SubDepartmentModule,
            department_module_1.DepartmentsModule
        ],
        providers: [core_1.HttpAdapterHost]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map