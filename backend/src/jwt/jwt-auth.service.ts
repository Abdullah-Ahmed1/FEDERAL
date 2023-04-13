import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { User } from '../../users/user.entity';
import { JwtPayload } from './jwt-auth.strategy';

@Injectable()
export class JwtAuthService {
    constructor(private jwtService: JwtService) { }

    login(user) {
        try {
            const payload: JwtPayload = { username: user.username, sub: user.id };
            return {

                accessToken: this.jwtService.sign(payload, { secret: process.env.JWT_SECRET }),
            };
        } catch (err) {
            console.log("error is  : ", err)
        }

    }
}