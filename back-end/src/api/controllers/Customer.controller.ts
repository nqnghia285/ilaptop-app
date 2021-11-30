import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { CustomerService } from '~/api/services'

@Controller('customer')
export class CustomerController {
   constructor(private customer: CustomerService) {}

   @Get('unique')
   findUnique(@Query('args') args: Prisma.CustomerFindUniqueArgs) {
      return this.customer.findUnique(args)
   }

   @Get('first')
   findFirst(@Query('args') args: Prisma.CustomerFindFirstArgs) {
      return this.customer.findFirst(args)
   }

   @Get('many')
   findMany(@Query('args') args: Prisma.CustomerFindManyArgs) {
      console.log('args:', args)
      return this.customer.findMany(args)
   }

   @Post()
   create(@Body() args: Prisma.CustomerCreateArgs) {
      return this.customer.create(args)
   }

   @Post('many')
   createMany(@Body() args: Prisma.CustomerCreateManyArgs) {
      return this.customer.createMany(args)
   }

   @Delete()
   delete(@Query('args') args: Prisma.CustomerDeleteArgs) {
      return this.customer.delete(args)
   }

   @Delete('many')
   deleteMany(@Query('args') args: Prisma.CustomerDeleteManyArgs) {
      return this.customer.deleteMany(args)
   }

   @Put()
   update(@Body() args: Prisma.CustomerUpdateArgs) {
      return this.customer.update(args)
   }

   @Put('many')
   updateMany(@Body() args: Prisma.CustomerUpdateManyArgs) {
      return this.customer.updateMany(args)
   }
}
