import { Controller,Post,Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('signup')
    signup(@Req() req : Request){
        return this.authService.signup(req);
    }

    @Post('signin') // this here defines the endpoint for an API
    signin(@Req() req : Request){
        return this.authService.signin(req)       
    }



}
