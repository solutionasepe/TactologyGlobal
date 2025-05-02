import { AuthService } from "./auth.service";
import { Repository } from 'typeorm';
import { user } from "./user.entity";
import { LoginDto } from "./dto.ts/login.dto";
import { RegisterDto } from "./dto.ts/resgister.dto";
export declare class AuthController {
    private readonly authservice;
    private readonly userRepo;
    constructor(authservice: AuthService, userRepo: Repository<user>);
    register(body: RegisterDto): Promise<user>;
    login(body: LoginDto): Promise<{
        accesstoken: string;
    }>;
}
