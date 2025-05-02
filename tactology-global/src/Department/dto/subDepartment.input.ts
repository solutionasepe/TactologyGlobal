import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class subDepartmentInput{
    @Field()
    name:string;
}