import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentInput } from './dto/Department.input';
import { AuthGuard } from '@nestjs/passport';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentService: DepartmentService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() body: DepartmentInput) {
    return this.departmentService.create(body);
  }
}
