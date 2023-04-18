import { Controller, Post, Req, Res, Get, UseGuards, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Request,Response } from 'express';
@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) { }

    @Get('test')
    test() {
        this.productService.test()
    }

    @Post('addProduct/:categoryId')
    addProduct(@Req() req :Request,@Res() res : Response){
        this.productService.addProduct(req,res)
    }

    @Get('getAllProducts')
    getAllProducts(){
        this.productService.getAllProducts()
    }

    @Get('getProductById')
    getProductById(){
        this.productService.getProdcutById()
    }
}
