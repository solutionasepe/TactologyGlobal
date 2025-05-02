import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ApolloDriver} from '@nestjs/apollo';
import { AuthModule } from './auth/auth.module';
import { HttpAdapterHost } from '@nestjs/core';
import { SubDepartmentModule } from './Department/subdepartment.module';
import { DepartmentsModule } from './Department/department.module';

@Module({
  
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile:true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database:'db.sqlite',
      entities: [__dirname +  '/**/*.entity{.ts,.js}'],
      synchronize:true,
    }),
    AuthModule,
    SubDepartmentModule,
    DepartmentsModule
  ],
  providers:[HttpAdapterHost]
})
export class AppModule {}
