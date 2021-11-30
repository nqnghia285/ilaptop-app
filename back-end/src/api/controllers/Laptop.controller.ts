import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { LaptopService } from '~/api/services'

@Controller('laptop')
export class LaptopController {
   constructor(private laptop: LaptopService) {}

   @Get('unique')
   findUnique(@Query('args') args: Prisma.LaptopFindUniqueArgs) {
      return this.laptop.findUnique(args)
   }

   @Get('first')
   findFirst(@Query('args') args: Prisma.LaptopFindFirstArgs) {
      return this.laptop.findFirst(args)
   }

   @Get('many')
   findMany(@Query('args') args: Prisma.LaptopFindManyArgs) {
      console.log('args:', args)
      return this.laptop.findMany(args)
   }

   @Post()
   create(@Body() args: Prisma.LaptopCreateArgs) {
      return this.laptop.create(args)
   }

   @Post('many')
   createMany(@Body() args: Prisma.LaptopCreateManyArgs) {
      return this.laptop.createMany(args)
   }

   @Delete()
   delete(@Query('args') args: Prisma.LaptopDeleteArgs) {
      return this.laptop.delete(args)
   }

   @Delete('many')
   deleteMany(@Query('args') args: Prisma.LaptopDeleteManyArgs) {
      return this.laptop.deleteMany(args)
   }

   @Put()
   update(@Body() args: Prisma.LaptopUpdateArgs) {
      return this.laptop.update(args)
   }

   @Put('many')
   updateMany(@Body() args: Prisma.LaptopUpdateManyArgs) {
      return this.laptop.updateMany(args)
   }
}
