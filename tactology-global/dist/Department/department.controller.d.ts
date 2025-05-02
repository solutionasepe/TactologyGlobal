import { DepartmentService } from './department.service';
import { DepartmentInput } from './dto/Department.input';
export declare class DepartmentsController {
    private readonly departmentService;
    constructor(departmentService: DepartmentService);
    create(body: DepartmentInput): Promise<import("./department.entity").Department>;
}
