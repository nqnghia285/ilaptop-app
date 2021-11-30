import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PersonService } from '~/api/services'

@Controller('person')
export class PersonController {
   constructor(private person: PersonService) {}

   @Get('unique')
   findUnique(@Query('args') args: Prisma.PersonFindUniqueArgs) {
      return this.person.findUnique(args)
   }

   @Get('first')
   findFirst(@Query('args') args: Prisma.PersonFindFirstArgs) {
      return this.person.findFirst(args)
   }

   @Get('many')
   findMany(@Query('args') args: Prisma.PersonFindManyArgs) {
      console.log('args:', args)
      return this.person.findMany(args)
   }

   @Post()
   create(@Body() args: Prisma.PersonCreateArgs) {
      return this.person.create(args)
   }

   @Post('many')
   createMany(@Body() args: Prisma.PersonCreateManyArgs) {
      return this.person.createMany(args)
   }

   @Delete()
   delete(@Query('args') args: Prisma.PersonDeleteArgs) {
      return this.person.delete(args)
   }

   @Delete('many')
   deleteMany(@Query('args') args: Prisma.PersonDeleteManyArgs) {
      return this.person.deleteMany(args)
   }

   @Put()
   update(@Body() args: Prisma.PersonUpdateArgs) {
      return this.person.update(args)
   }

   @Put('many')
   updateMany(@Body() args: Prisma.PersonUpdateManyArgs) {
      return this.person.updateMany(args)
   }
}
