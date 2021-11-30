import { Injectable } from '@nestjs/common'
import { PrismaService } from '~/services'
import { Prisma } from '@prisma/client'

@Injectable()
export class CustomerService {
   constructor(private prismaService: PrismaService) {}

   create(args: Prisma.CustomerCreateArgs) {
      return this.prismaService.customer.create(args)
   }

   createMany(args: Prisma.CustomerCreateManyArgs) {
      return this.prismaService.customer.createMany(args)
   }

   update(args: Prisma.CustomerUpdateArgs) {
      return this.prismaService.customer.update(args)
   }

   updateMany(args: Prisma.CustomerUpdateManyArgs) {
      return this.prismaService.customer.updateMany(args)
   }

   delete(args: Prisma.CustomerDeleteArgs) {
      return this.prismaService.customer.delete(args)
   }

   deleteMany(args: Prisma.CustomerDeleteManyArgs) {
      return this.prismaService.customer.deleteMany(args)
   }

   findFirst(args: Prisma.CustomerFindFirstArgs) {
      return this.prismaService.customer.findFirst(args)
   }

   findMany(args: Prisma.CustomerFindManyArgs) {
      return this.prismaService.customer.findMany(args)
   }

   findUnique(args: Prisma.CustomerFindUniqueArgs) {
      return this.prismaService.customer.findUnique(args)
   }
}
