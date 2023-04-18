import { Injectable } from '@nestjs/common';
import { JwtAuthService } from 'src/jwt/jwt-auth.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService, private jwtAuthService: JwtAuthService) { }
    
    test(){
        console.log("reached")
    }

    addProduct(){
        console.log("addproduct route reached")
    }
    getAllProducts(){
        console.log("getAllProducts route reached")
    }

    getProdcutById(){
        console.log("getProductById route reached")
    }


}
