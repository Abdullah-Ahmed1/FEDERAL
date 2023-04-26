import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from '@nestjs/common';
import { Request,Response } from "express";
import { errorResponse } from "src/constants/responses";

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) {}
    async sendMail(req:Request,res:Response) {
        try{
            console.log("----->>>>",req.body.email)
            await this.mailerService.sendMail({
                to: req.body.email,
                subject: 'Greeting from NestJS NodeMailer',
                // template: './email',
                text: 'hello world',
                context: {
                    name: req.body.name
                }
            })
            
            return res.status(200).send({
                msg:"email sent successfully"
            })
        }catch(err){
            console.log(err)
            return res.status(400).send(errorResponse)

        }
       
    }
}
