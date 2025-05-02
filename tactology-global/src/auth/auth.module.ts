import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import {user} from './user.entity';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controllers';
import { JwtStrategy } from './jwt.strategy';
import { AuthResolver } from './auth.resolver';
@Module({
    imports:[
        TypeOrmModule.forFeature([user]),
        PassportModule,
        JwtModule.register({
            secret: 'secretKey',
            signOptions: {expiresIn: '1h'},
        }),
    ],
    controllers:[AuthController],
    providers: [AuthService, JwtStrategy, AuthResolver]
})

export class AuthModule{}