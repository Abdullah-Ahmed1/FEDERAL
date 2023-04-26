import { Injectable } from '@nestjs/common';
import { JwtAuthService } from 'src/jwt/jwt-auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request, Response } from 'express';
import { errorResponse } from 'src/constants/responses';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService, private jwtAuthService: JwtAuthService) { }

    test() {
        console.log("reached")
    }
    async addProduct(req: Request, res: Response) {
        console.log("addproduct route reached")
        try {
            
            const category = await this.prisma.category.findFirst({
                where:{
                    id : req.params.categoryId
                }
            }) 

            if(!category) return res.status(404).send({
                msg: "category not found"
            })
            
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
            return res.status(400).send(errorResponse)
        }
    }

    async updateProduct(req, res) {
        try {
            const product = await this.prisma.product.findFirst({
                where: { id: req.params.productId }
            })

            if (!product) return res.status(404).send({
                msg: 'product to update not found'
            })

            await this.prisma.product.update({
                where: {
                    id: req.params.productId
                },
                data: req.body
            })

            return res.status(200).send({
                msg: "product updated successfully"
            })
        } catch (err) {
            console.log(err)
            return res.status(400).send(errorResponse)
        }
    }

    async getAllProducts(req: Request, res: Response) {
        try {
            const products = await this.prisma.product.findMany({
                where: {}
            })
            return res.status(200).send({
                msg: "success",
                products: products
            })

        } catch (err) {
            return res.status(400).send(errorResponse)
        }
    }

    async getProductById(req: Request, res: Response) {
        console.log("getProductById route reached")
        try {
            if (!req.params.productId) return res.status(400).send({
                msg: "bad request, product id should not be empty"
            })

            const product = await this.prisma.product.findFirst({
                where: {
                    id: req.params.productId
                }
            })
            if (!product) return res.status(404).send({
                msg: "no product found"
            })
            return res.status(200).send({
                msg: 'success',
                product
            })
        } catch (err) {
            return res.status(400).send(errorResponse)
        }
    }

    async deleteProduct(req, res) {
        try {

            const product = await this.prisma.product.findFirst({
                where:{
                    id :req.params.productId
                }
            })
            if(!product) return res.status(404).send({
                msg: 'product to delete not found'
            })

            const deletedProduct = await this.prisma.product.delete({
                where: {
                    id: req.params.productId
                }
            })
            console.log("-------->", deletedProduct)
            if (!deletedProduct) return res.status(404).send({
                msg: "no product found against given id"
            })
            return res.status(200).send({
                msg: 'product deleted successfully',
            })

        } catch (err) {
            console.log(err)
            return res.status(400).send(errorResponse)
        }
    }
}
