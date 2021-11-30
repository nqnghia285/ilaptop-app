import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PostService } from '~/api/services'

@Controller('post')
export class PostController {
   constructor(private post: PostService) {}

   @Get('unique')
   findUnique(@Query('args') args: Prisma.PostFindUniqueArgs) {
      return this.post.findUnique(args)
   }

   @Get('first')
   findFirst(@Query('args') args: Prisma.PostFindFirstArgs) {
      return this.post.findFirst(args)
   }

   @Get('many')
   findMany(@Query('args') args: Prisma.PostFindManyArgs) {
      console.log('args:', args)
      return this.post.findMany(args)
   }

   @Post()
   create(@Body() args: Prisma.PostCreateArgs) {
      return this.post.create(args)
   }

   @Post('many')
   createMany(@Body() args: Prisma.PostCreateManyArgs) {
      return this.post.createMany(args)
   }

   @Delete()
   delete(@Query('args') args: Prisma.PostDeleteArgs) {
      return this.post.delete(args)
   }

   @Delete('many')
   deleteMany(@Query('args') args: Prisma.PostDeleteManyArgs) {
      return this.post.deleteMany(args)
   }

   @Put()
   update(@Body() args: Prisma.PostUpdateArgs) {
      return this.post.update(args)
   }

   @Put('many')
   updateMany(@Body() args: Prisma.PostUpdateManyArgs) {
      return this.post.updateMany(args)
   }
}
