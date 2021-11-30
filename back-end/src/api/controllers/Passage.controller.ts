import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PassageService } from '~/api/services'

@Controller('passage')
export class PassageController {
   constructor(private passage: PassageService) {}

   @Get('unique')
   findUnique(@Query('args') args: Prisma.PassageFindUniqueArgs) {
      return this.passage.findUnique(args)
   }

   @Get('first')
   findFirst(@Query('args') args: Prisma.PassageFindFirstArgs) {
      return this.passage.findFirst(args)
   }

   @Get('many')
   findMany(@Query('args') args: Prisma.PassageFindManyArgs) {
      console.log('args:', args)
      return this.passage.findMany(args)
   }

   @Post()
   create(@Body() args: Prisma.PassageCreateArgs) {
      return this.passage.create(args)
   }

   @Post('many')
   createMany(@Body() args: Prisma.PassageCreateManyArgs) {
      return this.passage.createMany(args)
   }

   @Delete()
   delete(@Query('args') args: Prisma.PassageDeleteArgs) {
      return this.passage.delete(args)
   }

   @Delete('many')
   deleteMany(@Query('args') args: Prisma.PassageDeleteManyArgs) {
      return this.passage.deleteMany(args)
   }

   @Put()
   update(@Body() args: Prisma.PassageUpdateArgs) {
      return this.passage.update(args)
   }

   @Put('many')
   updateMany(@Body() args: Prisma.PassageUpdateManyArgs) {
      return this.passage.updateMany(args)
   }
}
