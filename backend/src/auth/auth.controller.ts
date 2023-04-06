import { Controller,Post,Req,Get,UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { GoogleOAuthGuard } from './utils/google-oauth.guard';
import { AuthGuard } from './utils/auth.guard';
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

    @UseGuards(GoogleOAuthGuard)
    @Get('test')
    test(){
      console.log("reacheddddddddddddddddd")   
    }

    @Get()
    @UseGuards(GoogleOAuthGuard)
    async googleAuth(@Req() req) {}
  
    @Get('google-redirect')
    @UseGuards(GoogleOAuthGuard)
    googleAuthRedirect(@Req() req) {
      return this.authService.googleLogin(req);
    }

}
