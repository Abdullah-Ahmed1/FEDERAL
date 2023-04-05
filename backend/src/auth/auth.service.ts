import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request } from 'express';
@Injectable()
export class AuthService {
    constructor(private prisma : PrismaService){}

    signup(req : Request){
        console.log(req.body)
        return {msg : "this is a signup function"}
    }

    signin(req : Request){
        console.log(req.body)
        return {msg : "this is a signed in function"}
    }
}
