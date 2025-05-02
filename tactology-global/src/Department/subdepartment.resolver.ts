import { Resolver, Mutation, Args, Query} from '@nestjs/graphql';
import { subDepartmentService } from './subdepartment.service';
import { subDepartmentInput } from './dto/subDepartment.input';
import { SubDepartment } from './subDepartment.entity';
import { UseGuards } from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport"

@Resolver(() => SubDepartment)
export class SubDepartmentResolver {
  constructor(private subdepartmentService: subDepartmentService) {}

     @Query(() => String)
      async hello(): Promise<string> {
        return 'Hello, World!';
      }
    

  @Mutation(() => SubDepartment)
  @UseGuards(AuthGuard('jwt'))
  createDepartment(@Args('input') input: subDepartmentInput) {
    return this.subdepartmentService.create(input);
  }
}

