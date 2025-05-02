import { AuthService } from "./auth.service";
import { Repository } from 'typeorm';
import { user } from "./user.entity";
export declare class AuthController {
    private readonly authservice;
    private readonly userRepo;
    constructor(authservice: AuthService, userRepo: Repository<user>);
    register(body: {
        username: string;
        password: string;
    }): Promise<user>;
    login(body: {
        username: string;
        password: any;
        string: any;
    }): Promise<{
        accesstoken: string;
    }>;
}
