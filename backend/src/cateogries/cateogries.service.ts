import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request, Response } from 'express';

@Injectable()
export class CateogriesService {
    constructor(private prisma: PrismaService) { }
    async addCategory(req: Request, res: Response) {
        console.log('add category endpoint reached---')
        try {
            await this.prisma.category.create({
                data: {
                    name: req.body.name
                }
            })

            return res.status(200).send({
                msg: "cateogry successfully created"
            })

        } catch (err) {
            console.log(err)
            return res.status(400).send({
                msg: "something went wrong"
            })
        }
    }

    async updateCategory(req: Request, res: Response) {
        console.log("update category endpoint reached")
        try {

            const category = await this.prisma.category.findFirst({
                where :{
                    id : req.params.categoryId
                }
            })

            if(!category) return res.status(400).send({
                msg: "record to update not found"
            })

            const updatedCateogry =  await this.prisma.category.update({
                where: {
                    id: req.params.categoryId
                },
                data: {
                    name: req.body.name
                }
            })
            console.log("---->",updatedCateogry)


            return res.status(200).send({
                msg: "category updated successfully"
            })

        } catch (err) {
            console.log(err)

            return res.status(400).send({
                msg: "Something Went Wrong"
            })
        }
    }

    async showAllCategories(req:Request,res:Response) {
        console.log("show all categories endpoints reached")
        try{
            const categories = await this.prisma.category.findMany({
                where:{}
            })
    
            return res.send({
                msg: 'success',
                categories:  categories   
            })
    
        }catch(err){
            console.log(err)
            return res.status(400).send({
                msg :'something went wrong'
            })

        }


    }
}
