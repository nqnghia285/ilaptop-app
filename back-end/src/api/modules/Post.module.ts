import { Module } from '@nestjs/common'
import { PostController } from '~/api/controllers'
import { PostService } from '~/api/services'
import { PrismaModule } from '~/modules/Prisma.module'

@Module({
   imports: [PrismaModule],
   controllers: [PostController],
   providers: [PostService],
   exports: [PostService],
})
export class PostModule {}
