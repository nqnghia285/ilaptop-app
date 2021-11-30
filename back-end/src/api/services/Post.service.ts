import { Injectable } from '@nestjs/common'
import { PrismaService } from '~/services'
import { Prisma } from '@prisma/client'

@Injectable()
export class PostService {
   constructor(private prismaService: PrismaService) {}

   create(args: Prisma.PostCreateArgs) {
      return this.prismaService.post.create(args)
   }

   createMany(args: Prisma.PostCreateManyArgs) {
      return this.prismaService.post.createMany(args)
   }

   update(args: Prisma.PostUpdateArgs) {
      return this.prismaService.post.update(args)
   }

   updateMany(args: Prisma.PostUpdateManyArgs) {
      return this.prismaService.post.updateMany(args)
   }

   delete(args: Prisma.PostDeleteArgs) {
      return this.prismaService.post.delete(args)
   }

   deleteMany(args: Prisma.PostDeleteManyArgs) {
      return this.prismaService.post.deleteMany(args)
   }

   findFirst(args: Prisma.PostFindFirstArgs) {
      return this.prismaService.post.findFirst(args)
   }

   findMany(args: Prisma.PostFindManyArgs) {
      return this.prismaService.post.findMany(args)
   }

   findUnique(args: Prisma.PostFindUniqueArgs) {
      return this.prismaService.post.findUnique(args)
   }
}
