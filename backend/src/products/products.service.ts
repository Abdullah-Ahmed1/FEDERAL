import { Injectable } from '@nestjs/common';
import { JwtAuthService } from 'src/jwt/jwt-auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request, Response } from 'express';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService, private jwtAuthService: JwtAuthService) { }

    test() {
        console.log("reached")
    }

    async addProduct(req: Request, res: Response) {
        console.log("addproduct route reached")
        try {
            await this.prisma.product.create({
                data: {
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    color: req.body.color,
                    image1: req.body.image1,
                    image2: req.body.image2,
                    image3: req.body.image3,
                    categoryId: req.params.categoryId
                }
            })
            res.status(200).send({
                msg: "Product created successfully"
            })
        } catch (err) {
            console.log(err)
            return res.status(400).send({
                msg: "Something went Wrong"
            })
        }

    }
    getAllProducts() {
        console.log("getAllProducts route reached")
    }

    getProdcutById() {
        console.log("getProductById route reached")
    }


}
