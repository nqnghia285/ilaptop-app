import { Module } from '@nestjs/common'
import { UserController } from '~/api/controllers'
import { UserService } from '~/api/services'
import { PrismaModule } from '~/modules/Prisma.module'

@Module({
   imports: [PrismaModule],
   controllers: [UserController],
   providers: [UserService],
   exports: [UserService],
})
export class UserModule {}
