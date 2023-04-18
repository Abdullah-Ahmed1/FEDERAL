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
                    name: "Helmets"
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


    showAllCategories() {
        console.log("show all categories endpoints reached")
    }
}
