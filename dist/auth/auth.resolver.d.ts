import { AuthService } from './auth.service';
export declare class AuthResolver {
    private readonly authservice;
    constructor(authservice: AuthService);
    hello(): Promise<string>;
    login(username: string, password: string): Promise<string>;
}
