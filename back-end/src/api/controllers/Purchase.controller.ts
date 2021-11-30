import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PurchaseService } from '~/api/services'

@Controller('purchase')
export class PurchaseController {
   constructor(private purchase: PurchaseService) {}

   @Get('unique')
   findUnique(@Query('args') args: Prisma.PurchaseFindUniqueArgs) {
      return this.purchase.findUnique(args)
   }

   @Get('first')
   findFirst(@Query('args') args: Prisma.PurchaseFindFirstArgs) {
      return this.purchase.findFirst(args)
   }

   @Get('many')
   findMany(@Query('args') args: Prisma.PurchaseFindManyArgs) {
      console.log('args:', args)
      return this.purchase.findMany(args)
   }

   @Post()
   create(@Body() args: Prisma.PurchaseCreateArgs) {
      return this.purchase.create(args)
   }

   @Post('many')
   createMany(@Body() args: Prisma.PurchaseCreateManyArgs) {
      return this.purchase.createMany(args)
   }

   @Delete()
   delete(@Query('args') args: Prisma.PurchaseDeleteArgs) {
      return this.purchase.delete(args)
   }

   @Delete('many')
   deleteMany(@Query('args') args: Prisma.PurchaseDeleteManyArgs) {
      return this.purchase.deleteMany(args)
   }

   @Put()
   update(@Body() args: Prisma.PurchaseUpdateArgs) {
      return this.purchase.update(args)
   }

   @Put('many')
   updateMany(@Body() args: Prisma.PurchaseUpdateManyArgs) {
      return this.purchase.updateMany(args)
   }
}
