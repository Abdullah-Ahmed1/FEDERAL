import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { CateogriesModule } from './cateogries/cateogries.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [AuthModule, PrismaModule, ProductsModule, CateogriesModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
