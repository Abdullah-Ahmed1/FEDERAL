
import { Reflector } from "@nestjs/core";
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor() {}

    canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean>  {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    // return (request)=>:Boolean{
        console.log("-------------->",token)
    return true
    // };
  }


  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return token
  }
}