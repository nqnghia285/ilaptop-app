import { Injectable } from '@nestjs/common'
import { PrismaService } from '~/services'
import { Prisma } from '@prisma/client'

@Injectable()
export class LaptopService {
   constructor(private prismaService: PrismaService) {}

   create(args: Prisma.LaptopCreateArgs) {
      return this.prismaService.laptop.create(args)
   }

   createMany(args: Prisma.LaptopCreateManyArgs) {
      return this.prismaService.laptop.createMany(args)
   }

   update(args: Prisma.LaptopUpdateArgs) {
      return this.prismaService.laptop.update(args)
   }

   updateMany(args: Prisma.LaptopUpdateManyArgs) {
      return this.prismaService.laptop.updateMany(args)
   }

   delete(args: Prisma.LaptopDeleteArgs) {
      return this.prismaService.laptop.delete(args)
   }

   deleteMany(args: Prisma.LaptopDeleteManyArgs) {
      return this.prismaService.laptop.deleteMany(args)
   }

   findFirst(args: Prisma.LaptopFindFirstArgs) {
      return this.prismaService.laptop.findFirst(args)
   }

   findMany(args: Prisma.LaptopFindManyArgs) {
      return this.prismaService.laptop.findMany(args)
   }

   findUnique(args: Prisma.LaptopFindUniqueArgs) {
      return this.prismaService.laptop.findUnique(args)
   }
}
