import { Injectable } from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm"
import {user} from './user.entity';

@Injectable()
export class AuthService{
    constructor(
        @InjectRepository(user)
        private userRepository: Repository<user>,
        private jwtService: JwtService

    ){}

    async ValidateUser(username:string, password:string): Promise<string | null> {
        const user = await this.userRepository.findOneBy({username});
        if(user && user.password === password){
            return this.jwtService.sign({username});
        }
        return null;
    }
}
