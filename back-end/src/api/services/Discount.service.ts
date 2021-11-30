import { Injectable } from '@nestjs/common'
import { PrismaService } from '~/services'
import { Prisma } from '@prisma/client'

@Injectable()
export class DiscountService {
   constructor(private prismaService: PrismaService) {}

   create(args: Prisma.DiscountCreateArgs) {
      return this.prismaService.discount.create(args)
   }

   createMany(args: Prisma.DiscountCreateManyArgs) {
      return this.prismaService.discount.createMany(args)
   }

   update(args: Prisma.DiscountUpdateArgs) {
      return this.prismaService.discount.update(args)
   }

   updateMany(args: Prisma.DiscountUpdateManyArgs) {
      return this.prismaService.discount.updateMany(args)
   }

   delete(args: Prisma.DiscountDeleteArgs) {
      return this.prismaService.discount.delete(args)
   }

   deleteMany(args: Prisma.DiscountDeleteManyArgs) {
      return this.prismaService.discount.deleteMany(args)
   }

   findFirst(args: Prisma.DiscountFindFirstArgs) {
      return this.prismaService.discount.findFirst(args)
   }

   findMany(args: Prisma.DiscountFindManyArgs) {
      return this.prismaService.discount.findMany(args)
   }

   findUnique(args: Prisma.DiscountFindUniqueArgs) {
      return this.prismaService.discount.findUnique(args)
   }
}
