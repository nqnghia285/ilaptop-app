import { Injectable } from '@nestjs/common'
import { PrismaService } from '~/services'
import { Prisma } from '@prisma/client'

@Injectable()
export class UserService {
   constructor(private prismaService: PrismaService) {}

   create(args: Prisma.UserCreateArgs) {
      return this.prismaService.user.create(args)
   }

   createMany(args: Prisma.UserCreateManyArgs) {
      return this.prismaService.user.createMany(args)
   }

   update(args: Prisma.UserUpdateArgs) {
      return this.prismaService.user.update(args)
   }

   updateMany(args: Prisma.UserUpdateManyArgs) {
      return this.prismaService.user.updateMany(args)
   }

   delete(args: Prisma.UserDeleteArgs) {
      return this.prismaService.user.delete(args)
   }

   deleteMany(args: Prisma.UserDeleteManyArgs) {
      return this.prismaService.user.deleteMany(args)
   }

   findFirst(args: Prisma.UserFindFirstArgs) {
      return this.prismaService.user.findFirst(args)
   }

   findMany(args: Prisma.UserFindManyArgs) {
      return this.prismaService.user.findMany(args)
   }

   findUnique(args: Prisma.UserFindUniqueArgs) {
      return this.prismaService.user.findUnique(args)
   }
}
