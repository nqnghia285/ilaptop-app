import { Module } from '@nestjs/common'
import { CommentController } from '~/api/controllers'
import { CommentService } from '~/api/services'
import { PrismaModule } from '~/modules/Prisma.module'

@Module({
   imports: [PrismaModule],
   controllers: [CommentController],
   providers: [CommentService],
   exports: [CommentService],
})
export class CommentModule {}
