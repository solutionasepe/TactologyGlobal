import { Resolver, Mutation, Args, Query} from '@nestjs/graphql';
import { DepartmentService } from './department.service';
import { DepartmentInput } from './dto/Department.input';
import { Department } from './department.entity';
import { UseGuards } from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport"

@Resolver(() => Department)
export class DepartmentResolver {
  constructor(private departmentService: DepartmentService) {}

   @Query(() => String)
    async hello(): Promise<string> {
      return 'Hello, World!';
    }
  
  @Mutation(() => Department)
  @UseGuards(AuthGuard('jwt'))
  createDepartment(@Args('input') input: DepartmentInput) {
    return this.departmentService.create(input);
  }
}

