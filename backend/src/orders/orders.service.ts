import { Injectable } from '@nestjs/common';
import {Request,Response} from 'express';
@Injectable()
export class OrdersService {
    createOrder(req,res){
        console.log("create order endpoint reached")
    }

    viewOrders(req,res){
        console.log("view orders endpoint reached")
    }
}
