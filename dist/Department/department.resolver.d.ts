import { DepartmentService } from './department.service';
import { DepartmentInput } from './dto/Department.input';
import { Department } from './department.entity';
export declare class DepartmentResolver {
    private departmentService;
    constructor(departmentService: DepartmentService);
    hello(): Promise<string>;
    createDepartment(input: DepartmentInput): Promise<Department>;
}
