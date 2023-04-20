import { Controller, Post, Req, Res, Get, Put, UseGuards, Delete, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
@Controller('orders')
export class OrdersController {
    constructor(private orderService: OrdersService){}


    @Post('createOrder')
    createOrder(@Req() req:Request,@Res() res:Response){
        this.orderService.createOrder(req,res)
    }

    @Get('ViewOrders')
    viewOrders(@Req() req:Request,@Res() res:Response){
        this.orderService.viewOrders(req,res)
    }
}
