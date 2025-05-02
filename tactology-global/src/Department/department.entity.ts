import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { SubDepartment } from "./subDepartment.entity";
import { ObjectType, Field, Int} from "@nestjs/graphql";

@ObjectType()
@Entity()
export class Department{
    @Field(() => Int )
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: String;

    @Field(() => [SubDepartment], { nullable: true })
    @OneToMany(() => SubDepartment, sub => sub.department, {cascade:true})
    subDepartments: SubDepartment[];
}