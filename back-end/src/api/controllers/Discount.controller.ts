import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { DiscountService } from '~/api/services'

@Controller('discount')
export class DiscountController {
   constructor(private discount: DiscountService) {}

   @Get('unique')
   findUnique(@Query('args') args: Prisma.DiscountFindUniqueArgs) {
      return this.discount.findUnique(args)
   }

   @Get('first')
   findFirst(@Query('args') args: Prisma.DiscountFindFirstArgs) {
      return this.discount.findFirst(args)
   }

   @Get('many')
   findMany(@Query('args') args: Prisma.DiscountFindManyArgs) {
      console.log('args:', args)
      return this.discount.findMany(args)
   }

   @Post()
   create(@Body() args: Prisma.DiscountCreateArgs) {
      return this.discount.create(args)
   }

   @Post('many')
   createMany(@Body() args: Prisma.DiscountCreateManyArgs) {
      return this.discount.createMany(args)
   }

   @Delete()
   delete(@Query('args') args: Prisma.DiscountDeleteArgs) {
      return this.discount.delete(args)
   }

   @Delete('many')
   deleteMany(@Query('args') args: Prisma.DiscountDeleteManyArgs) {
      return this.discount.deleteMany(args)
   }

   @Put()
   update(@Body() args: Prisma.DiscountUpdateArgs) {
      return this.discount.update(args)
   }

   @Put('many')
   updateMany(@Body() args: Prisma.DiscountUpdateManyArgs) {
      return this.discount.updateMany(args)
   }
}
