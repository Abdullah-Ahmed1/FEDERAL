import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request, Response } from 'express';
import { JwtAuthService } from '../jwt/jwt-auth.service';
@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtAuthService: JwtAuthService) { }

    async signup(req: Request, res: Response) {
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
            return res.status(200).send({ msg: "user registered successfully" })
        } catch (err) {
            console.log(err)
            return res.status(400).send({
                msg: "something went wrong"
            })
            console.log(err)
        }
    }

    async signin(req: Request, res: Response) {   //login

        try {
            const user = await this.prisma.user.findFirst({
                where: {
                    email: req.body.email
                }
            })
            console.log("user---->", user)

            if (!user) return res.status(400).send({
                msg: "Invalid email or password"
            })

            if (user.password != req.body.password) {
                return res.status(400).send({
                    msg: "Invalid email or password"
                })
            }

            return res.status(200).send({
                msg: "Logged in successfully"
            })
        } catch (err) {
            console.log(err)

            return res.status(400).send({
                msg: "somthing went wrong"
            })
        }


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
