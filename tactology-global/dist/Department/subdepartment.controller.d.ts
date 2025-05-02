import { subDepartmentService } from './subdepartment.service';
import { subDepartmentInput } from './dto/subDepartment.input';
export declare class SubDepartmentsController {
    private readonly subdepartmentService;
    constructor(subdepartmentService: subDepartmentService);
    create(body: subDepartmentInput): Promise<import("./subDepartment.entity").SubDepartment>;
}
