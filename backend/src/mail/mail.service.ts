import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from '@nestjs/common';
import { Request,Response } from "express";
import { errorResponse } from "src/constants/responses";

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) {}
    async sendMail(name,email,text) {
        try{
            console.log("----->>>>",email)
            await this.mailerService.sendMail({
                to: email,
                subject: 'Greeting from NestJS NodeMailer',
                // template: './email',
                text: text,
                context: {
                    name: name
                }
            })

            return {
                msg:"email sent successfully"
            }
        }catch(err){
            console.log(err)
            return errorResponse

        }
       
    }
}
