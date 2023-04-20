import { Controller, Post, Req, Res, Get, Put, UseGuards, Delete, Body } from '@nestjs/common';
import { CartService } from './cart.service';
import { Request,Response } from 'express';

@Controller('cart')
export class CartController {
    constructor(private cartService: CartService) { }


    @Post('addProductToCart/:userId')
    addProductToCart(@Req() req: Request, @Res() res: Response){
        this.cartService.addProductToCart(req,res)
        
    }

    @Get("viewCart/:userId")
    viewCart(@Req() req: Request, @Res() res: Response){
        this.cartService.viewCart(req,res)
    }

    @Post("removeProductFromCart/:cartId")
    removeProductFromCart(@Req() req: Request, @Res() res: Response){
        this.cartService.removeProductFromCart(req,res)
    }

    @Put("updateCart/:cartId")
    updateCart(@Req() req: Request, @Res() res: Response){
        this.cartService.updateCart(req,res)
    }


}
