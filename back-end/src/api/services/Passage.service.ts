import { Injectable } from '@nestjs/common'
import { PrismaService } from '~/services'
import { Prisma } from '@prisma/client'

@Injectable()
export class PassageService {
   constructor(private prismaService: PrismaService) {}

   create(args: Prisma.PassageCreateArgs) {
      return this.prismaService.passage.create(args)
   }

   createMany(args: Prisma.PassageCreateManyArgs) {
      return this.prismaService.passage.createMany(args)
   }

   update(args: Prisma.PassageUpdateArgs) {
      return this.prismaService.passage.update(args)
   }

   updateMany(args: Prisma.PassageUpdateManyArgs) {
      return this.prismaService.passage.updateMany(args)
   }

   delete(args: Prisma.PassageDeleteArgs) {
      return this.prismaService.passage.delete(args)
   }

   deleteMany(args: Prisma.PassageDeleteManyArgs) {
      return this.prismaService.passage.deleteMany(args)
   }

   findFirst(args: Prisma.PassageFindFirstArgs) {
      return this.prismaService.passage.findFirst(args)
   }

   findMany(args: Prisma.PassageFindManyArgs) {
      return this.prismaService.passage.findMany(args)
   }

   findUnique(args: Prisma.PassageFindUniqueArgs) {
      return this.prismaService.passage.findUnique(args)
   }
}
