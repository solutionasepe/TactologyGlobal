import { JwtService } from "@nestjs/jwt";
import { Repository } from "typeorm";
import { user } from './user.entity';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<user>, jwtService: JwtService);
    ValidateUser(username: string, password: string): Promise<string | null>;
}
