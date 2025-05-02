import { Module } from '@nestjs/common';
import { SubDepartmentsController } from './subdepartment.controller';
import { SubDepartmentResolver } from './subdepartment.resolver';
import { subDepartmentService } from './subdepartment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubDepartment } from './subDepartment.entity';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([SubDepartment]),
    AuthModule, 
  ],
  controllers: [SubDepartmentsController],
  providers: [subDepartmentService, SubDepartmentResolver],
})
export class SubDepartmentModule {}
