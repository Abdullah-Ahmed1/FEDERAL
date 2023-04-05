import { Module,Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

 @Global()  // here global means that exported module below will be available globally throught app  
@Module({
  providers: [PrismaService],
  exports:[PrismaService]
})
export class PrismaModule {}
