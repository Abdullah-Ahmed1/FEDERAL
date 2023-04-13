import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request } from 'express';
import { JwtAuthService } from '../jwt/jwt-auth.service';
@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtAuthService: JwtAuthService) { }

    async signup(req: Request) {
        console.log(req.body.phone)
        try {
            const user = await this.prisma.user.create({
                data: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    phone: req.body.phone
                }
            })
            console.log(user)
            return { msg: "this is a signup function" }
        } catch (err) {
            console.log(err)
        }
    }

    signin(req: Request) {
        console.log(req.body)
        return { msg: "this is a signed in function" }
    }

    googleLogin(req, res) {
        try {
            if (!req.user) {
                return 'No user from google';
            }
            const { accessToken } = this.jwtAuthService.login(req.user);
            res.cookie('jwt', accessToken, {
                httpOnly: true,
                sameSite: 'lax',
            });
            const response = {
                message: 'User information from google',
                user: req.user,
            }
            res.redirect(`http://localhost:5173?response=${encodeURIComponent(JSON.stringify(response))}`)


        } catch (err) {
            console.log("------>error is   :", err)
        }

    }
}
