import {Resolver, Query, Mutation, Args} from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver{
    constructor(private readonly authservice: AuthService){}

    @Query(() => String)
  async hello(): Promise<string> {
    return 'Hello, World!';
  }

    @Mutation(()=> String)
    async login(
        @Args('username') username: string,
        @Args('password') password: string
    ){
        const token = await this.authservice.ValidateUser(username, password);
        if(!token) throw new Error('Invalid Credentials')
        return token;
    }
}

