import{Controller, Post, Body} from "@nestjs/common";
import { AuthService } from "./auth.service";
import {Repository} from 'typeorm';
import {InjectRepository} from "@nestjs/typeorm";
import { user } from "./user.entity";

@Controller('auth')
export class AuthController{
    constructor(
        private readonly authservice:AuthService,
        @InjectRepository(user)
        private readonly userRepo: Repository<user>
    ){}

    @Post('register')
    async register(@Body() body: {username: string; password:string}){
        const user =  this.userRepo.create(body);
        return this.userRepo.save(user)
    }

    @Post('login')
    async login(@Body() body:{username:string; password;string}){
        const token = await this.authservice.ValidateUser(body.username, body.password)
        if(!token) throw Error('Invalid Credentials');
        return{accesstoken: token};
    }

}