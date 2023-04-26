import { Controller, Post,Query,Req,Res } from '@nestjs/common';
import { MailService } from "./mail.service";
import { Request,Response } from 'express';
@Controller('mail')
export class MailController {

    constructor(private readonly mailService: MailService) {}

    @Post('test')
    async sendEmail(@Req() req:Request,@Res() res:Response) {
        console.log("**--->>",__dirname)
        return await this.mailService.sendMail(req,res);
    }
}
