import { Module } from '@nestjs/common';
import { DepartmentResolver } from './department.resolver';
import { DepartmentService } from './department.service';
import { SubDepartmentResolver } from './subdepartment.resolver';
import { subDepartmentService } from './subdepartment.service';
import { DepartmentsController } from './department.controller';
import { SubDepartmentsController } from './subdepartment.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import { AuthModule } from 'src/auth/auth.module';
import { Department } from './department.entity';


@Module({
  imports:[
    TypeOrmModule.forFeature([Department]),
    AuthModule
  ],
  controllers:[DepartmentsController] , 
  providers: [DepartmentService, DepartmentResolver]
})
export class DepartmentsModule {}