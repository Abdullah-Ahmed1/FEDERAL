import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { User } from '../../users/user.entity';
import { JwtPayload } from './jwt-auth.strategy';

@Injectable()
export class JwtAuthService {
  constructor(private jwtService: JwtService) {}

  login(user) {
    try{
        const payload: JwtPayload = { username: user.username, sub: user.id };
        console.log("reacjed")
        return {
        
          accessToken: this.jwtService.sign(payload,{secret:"12345"}),
        };
    }catch(err){
        console.log("error is  : " ,err)
    }
   
  }
}