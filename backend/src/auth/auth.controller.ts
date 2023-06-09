import { Controller,Post,Req,Res,Get,UseGuards,Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { GoogleOAuthGuard } from './utils/google-oauth.guard';
// import { AuthGuard } from './utils/auth.guard';
import { UserDto } from '../auth/dto/user.dto';
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('signup')
    signup(@Body() body: UserDto,@Res() res){
        return this.authService.signup(body,res);
    }

    @Post('signin') 
    signin(@Req() req : Request ,@Res() res){
        return this.authService.signin(req,res)       
    }

    @Get(':id/verify/:token')
    verify(@Req() req:Request,@Res() res :Response){
      return this.authService.verify(req,res)
    }


    @Get('showAllUsers')
    showAllusers (@Req() req : Request ,@Res() res){
        return this.authService.showAllusers(req,res)
    }

    @UseGuards(JwtAuthGuard)
    @Get('test')
    test(@Req() req : Request ,@Res() res){
      const user = req.user
      console.log("-------->",user)
      console.log("reacheddddddddddddddddd")   
    }

    @Get()
    @UseGuards(GoogleOAuthGuard)
    async googleAuth(@Req() req) {}
  
    @Get('google-redirect')
    @UseGuards(GoogleOAuthGuard)
    googleAuthRedirect(@Req() req,@Res() res) {
      return this.authService.googleLogin(req,res);
    }

}
