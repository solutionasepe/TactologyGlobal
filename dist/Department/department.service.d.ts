import { Repository } from 'typeorm';
import { Department } from "./department.entity";
import { DepartmentInput } from "./dto/Department.input";
export declare class DepartmentService {
    private departmentRepo;
    constructor(departmentRepo: Repository<Department>);
    create(input: DepartmentInput): Promise<Department>;
}
