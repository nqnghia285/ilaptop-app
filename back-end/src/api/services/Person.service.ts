import { Injectable } from '@nestjs/common'
import { PrismaService } from '~/services'
import { Prisma } from '@prisma/client'

@Injectable()
export class PersonService {
   constructor(private prismaService: PrismaService) {}

   create(args: Prisma.PersonCreateArgs) {
      return this.prismaService.person.create(args)
   }

   createMany(args: Prisma.PersonCreateManyArgs) {
      return this.prismaService.person.createMany(args)
   }

   update(args: Prisma.PersonUpdateArgs) {
      return this.prismaService.person.update(args)
   }

   updateMany(args: Prisma.PersonUpdateManyArgs) {
      return this.prismaService.person.updateMany(args)
   }

   delete(args: Prisma.PersonDeleteArgs) {
      return this.prismaService.person.delete(args)
   }

   deleteMany(args: Prisma.PersonDeleteManyArgs) {
      return this.prismaService.person.deleteMany(args)
   }

   findFirst(args: Prisma.PersonFindFirstArgs) {
      return this.prismaService.person.findFirst(args)
   }

   findMany(args: Prisma.PersonFindManyArgs) {
      return this.prismaService.person.findMany(args)
   }

   findUnique(args: Prisma.PersonFindUniqueArgs) {
      return this.prismaService.person.findUnique(args)
   }
}
