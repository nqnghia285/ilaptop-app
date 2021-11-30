import { Injectable } from '@nestjs/common'
import { PrismaService } from '~/services'
import { Prisma } from '@prisma/client'

@Injectable()
export class CommentService {
   constructor(private prismaService: PrismaService) {}

   create(args: Prisma.CommentCreateArgs) {
      return this.prismaService.comment.create(args)
   }

   createMany(args: Prisma.CommentCreateManyArgs) {
      return this.prismaService.comment.createMany(args)
   }

   update(args: Prisma.CommentUpdateArgs) {
      return this.prismaService.comment.update(args)
   }

   updateMany(args: Prisma.CommentUpdateManyArgs) {
      return this.prismaService.comment.updateMany(args)
   }

   delete(args: Prisma.CommentDeleteArgs) {
      return this.prismaService.comment.delete(args)
   }

   deleteMany(args: Prisma.CommentDeleteManyArgs) {
      return this.prismaService.comment.deleteMany(args)
   }

   findFirst(args: Prisma.CommentFindFirstArgs) {
      return this.prismaService.comment.findFirst(args)
   }

   findMany(args: Prisma.CommentFindManyArgs) {
      return this.prismaService.comment.findMany(args)
   }

   findUnique(args: Prisma.CommentFindUniqueArgs) {
      return this.prismaService.comment.findUnique(args)
   }
}
