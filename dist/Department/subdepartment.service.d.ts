import { Repository } from 'typeorm';
import { SubDepartment } from "./subDepartment.entity";
import { subDepartmentInput } from "./dto/subDepartment.input";
export declare class subDepartmentService {
    private subdepartmentRepo;
    constructor(subdepartmentRepo: Repository<SubDepartment>);
    create(input: subDepartmentInput): Promise<SubDepartment>;
}
