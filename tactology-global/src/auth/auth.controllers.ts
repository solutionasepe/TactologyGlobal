import{Controller, Post, Body} from "@nestjs/common";
import { AuthService } from "./auth.service";
import {Repository} from 'typeorm';
import {InjectRepository} from "@nestjs/typeorm";
import { user } from "./user.entity";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { LoginDto } from "./dto.ts/login.dto";
import { RegisterDto } from "./dto.ts/resgister.dto";

@Controller('auth')
export class AuthController{
    constructor(
        private readonly authservice:AuthService,
        @InjectRepository(user)
        private readonly userRepo: Repository<user>
    ){}

    @Post('register')
    @ApiOperation({ summary: 'Register a new user' })
    @ApiResponse({ status: 201, description: 'User registered successfully' })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    async register(@Body() body: RegisterDto){
        const user =  this.userRepo.create(body);
        return this.userRepo.save(user)
    }

    @Post('login')
    async login(@Body() body:LoginDto){
        const token = await this.authservice.ValidateUser(body.username, body.password)
        if(!token) throw Error('Invalid Credentials');
        return{accesstoken: token};
    }

}