import { Injectable } from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm"
import {user} from './user.entity';
import * as bcyrpt from "bcrypt";


@Injectable()
export class AuthService{
    constructor(
        @InjectRepository(user)
        private userRepository: Repository<user>,
        private jwtService: JwtService

    ){}

    async ValidateUser(username:string, password:string): Promise<string | null> {
        const user = await this.userRepository.findOneBy({username});
        if(user && await bcyrpt.compare(password, user.password)){
            return this.jwtService.sign({username});
        }
        return null;
    }

    async hashpassword(password:string):Promise<string>{
        return await bcyrpt.hash(password, 10);
    }

    async registerUser(username:string, password:string): Promise<user>{
        const hashedPassword = await this.hashpassword(password);
        const newUser = this.userRepository.create({username, password:hashedPassword});
        const savedUser = this.userRepository.save(newUser);
        return savedUser;
        
    }
}
