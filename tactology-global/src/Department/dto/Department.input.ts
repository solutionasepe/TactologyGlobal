import { InputType, Field } from "@nestjs/graphql";
import { subDepartmentInput } from "./subDepartment.input";

@InputType()
export class DepartmentInput{
    @Field()
    name: string

    @Field(()=> subDepartmentInput, {nullable: true})
    subDepartments?: subDepartmentInput[];
}