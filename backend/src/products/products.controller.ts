import { Controller, Post, Req, Res, Get, UseGuards, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) { }

    @Get('test')
    test() {
        this.productService.test()
    }

    @Post('addProduct')
    addProduct(){
        this.productService.addProduct()
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