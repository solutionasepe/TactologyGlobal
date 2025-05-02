import { subDepartmentService } from './subdepartment.service';
import { subDepartmentInput } from './dto/subDepartment.input';
import { SubDepartment } from './subDepartment.entity';
export declare class SubDepartmentResolver {
    private subdepartmentService;
    constructor(subdepartmentService: subDepartmentService);
    hello(): Promise<string>;
    createDepartment(input: subDepartmentInput): Promise<SubDepartment>;
}
