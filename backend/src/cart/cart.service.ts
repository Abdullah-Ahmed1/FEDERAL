import { Injectable } from '@nestjs/common';
import { Request,Response } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { errorResponse } from 'src/constants/responses';
@Injectable()
export class CartService {
    constructor(private prisma: PrismaService) { }
     async addProductToCart(req: Request,res:Response){
        console.log("add product to cart endpoint reached")
        try{
            const productId = '466cb4c4-bac8-4624-94e4-22ddd777bf8f'
            const cart =  await this.prisma.cart.findFirst({
                where:{
                    customerId : req.params.userId,      // this customerid will be the id of the logged in customer
                    isCheckedOut : false,   // check if this cart is checked out
                }
            })
            if(cart){
                console.log('cart found')
                await this.prisma.cart.update({
                    where:{
                        id : cart.id
                    },
                    data:{
                        products:{
                            create:{
                                productQuantity:1,
                                product:{
                                    connect:{
                                        id: productId
                                    }
                                }
                            }
                        }
                    }
                })
                //then simply add new product here
                return res.status(200).send({
                    msg :"product added to cart"
                })
    
            }else{
                console.log('cart not found')
                console.log("------>>",req.params.userId)
                // create new cart and add product here
                await this.prisma.cart.create({
                    data:{
                        isCheckedOut :false,
                        customerId:"63f7af5d-dae3-436c-ae01-e98187d36683",
                        quantity:"sldkcm",
                        products:{
                            create:{
                                productQuantity:1,
                                product:{
                                    connect:{
                                        id: productId
                                    }
                                }
                            }
                        }
                    }
                })
                return res.status(200).send({
                    msg :"product added to cart"
                })
            }

        }catch(err){
            console.log(err)
            return res.status(400).send(errorResponse)
        }   
    }

    async viewCart(req: Request,res:Response){
        console.log("view cart endpoint reached")
        try{
            const cart =  await this.prisma.cart.findFirst({
                where:{
                    customerId:req.params.userId,
                    isCheckedOut:false
                },
                include:{
                    products : {
                        select:{
                            product:true
                        }
                    }
                    
                }
            })
            if(!cart)return res.send({
                msg :"your cart is empty"
            })

            return res.send({
                msg :"success",
                cart : cart
            })

        }catch(err){
            console.log(err)
            return res.status(400).send(errorResponse)
        }
    }

    async removeProductFromCart(req: Request,res:Response){
        console.log("remove product from cart reached")
        try{
            //here cart is fetched using customer id and if ischeckout is false and then its cart id will be used
            await this.prisma.cartOfProducts.deleteMany({
                where:{
                    productId : '466cb4c4-bac8-4624-94e4-22ddd777bf8f',
                    cartId: 'ff86659c-b5bd-4088-82f1-e2543b2d0930'
                }
                
            })
            return res.send({
                msg:"item removed"
            })
        }catch(err){
            console.log(err)
            return res.send(errorResponse)
        }
    }

    async updateCart(req: Request,res:Response){
        console.log("updatecart reached")
        try{
            //here cart is fetched using customer id and if ischeckout is false and then its cart id will be used 
            await this.prisma.cartOfProducts.updateMany({
                where:{
                    cartId:"",
                    productId:"",
                },
                data:{
                    productQuantity: 2     // this will be dynamic value                
                }
            })
        }catch(err){
            console.log(err)
            res.status(400).send(errorResponse)
        }
    }
}
