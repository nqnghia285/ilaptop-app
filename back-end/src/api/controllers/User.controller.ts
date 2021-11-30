import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common'
import { Prisma, Role } from '@prisma/client'
import { UserService } from '~/api/services/User.service'
import { Auth, User, UserFindManyArgs } from '~/decorators'
import { IUserInfo } from '~/interfaces'

@Controller('user')
export class UserController {
   constructor(private user: UserService) {}

   @Get('unique')
   findUnique(@Query('args') args: Prisma.UserFindUniqueArgs) {
      return this.user.findUnique(args)
   }

   @Get('first')
   findFirst(@Query('args') args: Prisma.UserFindFirstArgs) {
      return this.user.findFirst(args)
   }

   @Get('many')
   @Auth(Role.ADMIN)
   findMany(@User() user: IUserInfo, @UserFindManyArgs() args: Prisma.UserFindManyArgs) {
      console.log('user:', user)
      return this.user.findMany(args)
   }

   @Post()
   create(@Body() args: Prisma.UserCreateArgs) {
      return this.user.create(args)
   }

   @Post('many')
   createMany(@Body() args: Prisma.UserCreateManyArgs) {
      return this.user.createMany(args)
   }

   @Delete()
   delete(@Query('args') args: Prisma.UserDeleteArgs) {
      return this.user.delete(args)
   }

   @Delete('many')
   deleteMany(@Query('args') args: Prisma.UserDeleteManyArgs) {
      return this.user.deleteMany(args)
   }

   @Put()
   update(@Body() args: Prisma.UserUpdateArgs) {
      return this.user.update(args)
   }

   @Put('many')
   updateMany(@Body() args: Prisma.UserUpdateManyArgs) {
      return this.user.updateMany(args)
   }
}
