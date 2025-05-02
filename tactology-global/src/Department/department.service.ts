import { Injectable } from "@nestjs/common"; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from "./department.entity";
import { DepartmentInput } from "./dto/Department.input";

@Injectable()
export class DepartmentService{
    constructor(
        @InjectRepository(Department)
        private departmentRepo: Repository<Department>,
    ){}

    create(input:DepartmentInput){
        const department = this.departmentRepo.create(input);
        return this.departmentRepo.save(department);
    }
}