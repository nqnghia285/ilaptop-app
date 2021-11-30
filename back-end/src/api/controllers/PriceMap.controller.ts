import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PriceMapService } from '~/api/services'

@Controller('priceMap')
export class PriceMapController {
   constructor(private priceMap: PriceMapService) {}

   @Get('unique')
   findUnique(@Query('args') args: Prisma.PriceMapFindUniqueArgs) {
      return this.priceMap.findUnique(args)
   }

   @Get('first')
   findFirst(@Query('args') args: Prisma.PriceMapFindFirstArgs) {
      return this.priceMap.findFirst(args)
   }

   @Get('many')
   findMany(@Query('args') args: Prisma.PriceMapFindManyArgs) {
      console.log('args:', args)
      return this.priceMap.findMany(args)
   }

   @Post()
   create(@Body() args: Prisma.PriceMapCreateArgs) {
      return this.priceMap.create(args)
   }

   @Post('many')
   createMany(@Body() args: Prisma.PriceMapCreateManyArgs) {
      return this.priceMap.createMany(args)
   }

   @Delete()
   delete(@Query('args') args: Prisma.PriceMapDeleteArgs) {
      return this.priceMap.delete(args)
   }

   @Delete('many')
   deleteMany(@Query('args') args: Prisma.PriceMapDeleteManyArgs) {
      return this.priceMap.deleteMany(args)
   }

   @Put()
   update(@Body() args: Prisma.PriceMapUpdateArgs) {
      return this.priceMap.update(args)
   }

   @Put('many')
   updateMany(@Body() args: Prisma.PriceMapUpdateManyArgs) {
      return this.priceMap.updateMany(args)
   }
}
