import { Injectable } from '@nestjs/common'
import { PrismaService } from '~/services'
import { Prisma } from '@prisma/client'

@Injectable()
export class PriceMapService {
   constructor(private prismaService: PrismaService) {}

   create(args: Prisma.PriceMapCreateArgs) {
      return this.prismaService.priceMap.create(args)
   }

   createMany(args: Prisma.PriceMapCreateManyArgs) {
      return this.prismaService.priceMap.createMany(args)
   }

   update(args: Prisma.PriceMapUpdateArgs) {
      return this.prismaService.priceMap.update(args)
   }

   updateMany(args: Prisma.PriceMapUpdateManyArgs) {
      return this.prismaService.priceMap.updateMany(args)
   }

   delete(args: Prisma.PriceMapDeleteArgs) {
      return this.prismaService.priceMap.delete(args)
   }

   deleteMany(args: Prisma.PriceMapDeleteManyArgs) {
      return this.prismaService.priceMap.deleteMany(args)
   }

   findFirst(args: Prisma.PriceMapFindFirstArgs) {
      return this.prismaService.priceMap.findFirst(args)
   }

   findMany(args: Prisma.PriceMapFindManyArgs) {
      return this.prismaService.priceMap.findMany(args)
   }

   findUnique(args: Prisma.PriceMapFindUniqueArgs) {
      return this.prismaService.priceMap.findUnique(args)
   }
}
