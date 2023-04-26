import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [MailerModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (config: ConfigService) => ({
      transport: {
        host: config.get('EMAIL_HOST'),
        secure: false,
        auth: {
          user: config.get('EMAIL_USER'),
          pass: config.get('EMAIL_PASSWORD'),
        },
      },
      defaults: {
        from: 'meranaam1999@gmail.com'
      },
      // template: {
      //   dir: join(__dirname, `../templates`),
      //   adapter: new HandlebarsAdapter(),
      //   options: {
      //     strict: false
      //   }
      // }
    }),
    inject: [ConfigService]
  }), ConfigModule.forRoot()],
  controllers: [MailController],
  providers: [MailService]
})
export class MailModule {}
