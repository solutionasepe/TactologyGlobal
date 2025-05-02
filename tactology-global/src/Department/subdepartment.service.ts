import { Injectable } from "@nestjs/common"; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubDepartment } from "./subDepartment.entity";
import { subDepartmentInput } from "./dto/subDepartment.input";

@Injectable()
export class subDepartmentService{
    constructor(
        @InjectRepository(SubDepartment)
        private subdepartmentRepo: Repository<SubDepartment>,
    ){}

    create(input:subDepartmentInput){
        const subdepartment = this.subdepartmentRepo.create(input);
        return this.subdepartmentRepo.save(subdepartment);
    }
}