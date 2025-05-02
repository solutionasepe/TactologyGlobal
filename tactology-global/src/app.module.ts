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
      type: "postgres", 
      url: "postgresql://tactologydb_user:DNJlO081rWxEIJ4EcNUjYcbOdq0PlYUl@dpg-d0a7u78gjchc73btkorg-a.oregon-postgres.render.com/tactologydb",
      ssl: { rejectUnauthorized: false },
      port: 5432, 
      username: "tactologydb_user",
      password: "DNJlO081rWxEIJ4EcNUjYcbOdq0PlYUl",
      database: "tactologydb",
      entities: [__dirname +  '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true
      
    }),
    AuthModule,
    SubDepartmentModule,
    DepartmentsModule
  ],
  providers:[HttpAdapterHost]
})
export class AppModule {}
