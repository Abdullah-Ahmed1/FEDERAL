import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request, Response } from 'express';
import { JwtAuthService } from '../jwt/jwt-auth.service';
import { MailService } from 'src/mail/mail.service';
import { errorResponse } from 'src/constants/responses';
import { randomBytes } from 'crypto';
@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtAuthService: JwtAuthService,private mailService :MailService) {}
    

    async signup(body , res: Response) {
        console.log("body is : ",body)
        try {
            const user = await this.prisma.user.findFirst({
                where:{
                    email : body.email
                }
            }) 
            if(user) return res.status(400).send({
                msg : "email already exist"
            })
               const createdUser = await this.prisma.user.create({
                data: {
                    username: body.username,
                    email: body.email,
                    password: body.password,
                    phone: body.phone,
                    address: body.address
                }
            })
            
             const token = await this.prisma.token.create({
                data:{
                    token: randomBytes(32).toString('hex')
                }
            })
            const url  =`${process.env.BASE_URL}/users/${createdUser.id}/verify/${token.token}`
            
            await this.mailService.sendMail(body.username,body.email,url)

            return res.status(200).send({ msg: "email sent to your address please verify"})
        } catch (err) {
            console.log(err)
            return res.status(400).send(errorResponse)
        }
    }

    async signin(req: Request, res: Response) {   //login

        try {
            const user = await this.prisma.user.findFirst({
                where: {
                    email: req.body.email
                }
            })

            if (!user) return res.status(400).send({
                msg: "Invalid email or password"
            })

            if (user.password != req.body.password) {
                return res.status(400).send({
                    msg: "Invalid email or password"
                })
            }

            const {accessToken} = this.jwtAuthService.login(user)
            res.cookie('jwt', accessToken, {
                httpOnly: true,
                // sameSite: 'lax',
            });
            return res.status(200).send({
                token:accessToken,
                msg: "Logged in successfully"
            })
        } catch (err) {
            console.log(err)
            return res.status(400).send(errorResponse)
        }
    }

    async verify(req,res){

        try{
            const token =req.body.token
            const userId =req.body.userId

            const userFound = await this.prisma.user.findFirst({
                where:{
                    id :userId
                }
            })

            if(!userFound){
                return res.status(400).send({
                    message :"Invalid Link"
                })
            }

            const tokenFound = await this.prisma.token.findFirst({
                where:{
                    token: token
                }
            })   
            if(!tokenFound){
                return res.status(400).send({
                    message :"Invalid Link"
                })
            } 

            await this.prisma.user.update({
                where:{
                    id :userId
                },
                data:{
                    isVerified : true
                }
            })

            await this.prisma.token.delete({
                where:{
                    id : tokenFound.id
                }
            })

            return res.status(200).send({
                msg :"user verified successfully"
            })

        }catch(err){    
            console.log(err)
            return res.status(400).send(errorResponse)
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
                // sameSite: 'lax',
            });
            const response = {
                message: 'User information from google',
                user: req.user,
            }
            res.redirect(`http://localhost:5173?response=${encodeURIComponent(JSON.stringify(response))}`)
        } catch (err) {
            console.log("------>error is   :", err)
            return res.status(400).send(errorResponse)
        }

    }
    async showAllusers(req,res){
        try{
            const users = await this.prisma.user.findMany({
                where:{}
            }) 

            return res.status(200).send({
                users: users
            })
        }catch(err){
            console.log(err)
            return res.status(400).send(errorResponse)
        }    
    }
}
