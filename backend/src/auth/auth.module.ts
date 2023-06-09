import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GoogleStrategy } from './utils/google.strategy';
import { ConfigModule } from '@nestjs/config';
import { JwtAuthService } from '../jwt/jwt-auth.service';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthStrategy } from 'src/jwt/jwt-auth.strategy';
import { MailService } from 'src/mail/mail.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AuthController],
  providers:[AuthService,GoogleStrategy,JwtAuthService,JwtService,JwtAuthStrategy,MailService]
})
export class AuthModule {}
