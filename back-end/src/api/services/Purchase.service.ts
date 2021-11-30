import { Injectable } from '@nestjs/common'
import { PrismaService } from '~/services'
import { Prisma } from '@prisma/client'

@Injectable()
export class PurchaseService {
   constructor(private prismaService: PrismaService) {}

   create(args: Prisma.PurchaseCreateArgs) {
      return this.prismaService.purchase.create(args)
   }

   createMany(args: Prisma.PurchaseCreateManyArgs) {
      return this.prismaService.purchase.createMany(args)
   }

   update(args: Prisma.PurchaseUpdateArgs) {
      return this.prismaService.purchase.update(args)
   }

   updateMany(args: Prisma.PurchaseUpdateManyArgs) {
      return this.prismaService.purchase.updateMany(args)
   }

   delete(args: Prisma.PurchaseDeleteArgs) {
      return this.prismaService.purchase.delete(args)
   }

   deleteMany(args: Prisma.PurchaseDeleteManyArgs) {
      return this.prismaService.purchase.deleteMany(args)
   }

   findFirst(args: Prisma.PurchaseFindFirstArgs) {
      return this.prismaService.purchase.findFirst(args)
   }

   findMany(args: Prisma.PurchaseFindManyArgs) {
      return this.prismaService.purchase.findMany(args)
   }

   findUnique(args: Prisma.PurchaseFindUniqueArgs) {
      return this.prismaService.purchase.findUnique(args)
   }
}
