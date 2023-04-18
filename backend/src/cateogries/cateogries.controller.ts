import { Controller, Post, Req, Res, Get, UseGuards, Body } from '@nestjs/common';
import { CateogriesService } from './cateogries.service';
import { Request, Response } from 'express';
@Controller('cateogries')
export class CateogriesController {

    constructor(private categoryService: CateogriesService) {}


@Post('addCategory')
    addCategory(@Req() req : Request ,@Res() res : Response){
        this.categoryService.addCategory(req,res)
    }


 @Get('showAllCategories')
 showAllCategories(){
    this.categoryService.showAllCategories()
 }
}
