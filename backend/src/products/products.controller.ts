import { Controller, Post, Req, Res, Get,Put,UseGuards, Body } from '@nestjs/common';
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

    @Put('updateProduct/:productId')
    updateProduct(@Req() req :Request,@Res() res : Response){
        this.productService.updateProduct(req,res)
    }

    @Get('getAllProducts')
    getAllProducts(@Req() req :Request,@Res() res : Response){
        this.productService.getAllProducts(req,res)
    }

    @Get('getProductById')
    getProductById(){
        this.productService.getProdcutById()
    }
}
