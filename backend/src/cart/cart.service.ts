import { Injectable } from '@nestjs/common';
import { Request,Response } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
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
            return res.status(400).send({
                mag :"something went wrong"
            })
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
            return res.status(400).send({
                msg :"something went wrong"
            })
        }
    }

    removeProductFromCart(req: Request,res:Response){
        console.log("remove product from cart reached")
    }

    updateCart(req: Request,res:Response){
        console.log("updatecart reached")
    }

}
