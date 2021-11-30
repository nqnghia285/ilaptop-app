import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { CommentService } from '~/api/services'

@Controller('comment')
export class CommentController {
   constructor(private  comment: CommentService) {}

   @Get('unique')
   findUnique(@Query('args') args: Prisma.CommentFindUniqueArgs) {
      return this.comment.findUnique(args)
   }

   @Get('first')
   findFirst(@Query('args') args: Prisma.CommentFindFirstArgs) {
      return this.comment.findFirst(args)
   }

   @Get('many')
   findMany(@Query('args') args: Prisma.CommentFindManyArgs) {
      console.log('args:', args)
      return this.comment.findMany(args)
   }

   @Post()
   create(@Body() args: Prisma.CommentCreateArgs) {
      return this.comment.create(args)
   }

   @Post('many')
   createMany(@Body() args: Prisma.CommentCreateManyArgs) {
      return this.comment.createMany(args)
   }

   @Delete()
   delete(@Query('args') args: Prisma.CommentDeleteArgs) {
      return this.comment.delete(args)
   }

   @Delete('many')
   deleteMany(@Query('args') args: Prisma.CommentDeleteManyArgs) {
      return this.comment.deleteMany(args)
   }

   @Put()
   update(@Body() args: Prisma.CommentUpdateArgs) {
      return this.comment.update(args)
   }

   @Put('many')
   updateMany(@Body() args: Prisma.CommentUpdateManyArgs) {
      return this.comment.updateMany(args)
   }
}
