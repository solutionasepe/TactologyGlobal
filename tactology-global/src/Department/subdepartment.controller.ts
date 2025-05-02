import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { subDepartmentService } from './subdepartment.service';
import { subDepartmentInput } from './dto/subDepartment.input';
import { AuthGuard } from '@nestjs/passport';

@Controller('subdepartments')
export class SubDepartmentsController {
  constructor(private readonly subdepartmentService: subDepartmentService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('test')
  async create(@Body() body: subDepartmentInput) {
    return this.subdepartmentService.create(body);
  }
}
