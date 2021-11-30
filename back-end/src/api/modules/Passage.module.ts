import { Module } from '@nestjs/common'
import { PassageController } from '~/api/controllers'
import { PassageService } from '~/api/services'
import { PrismaModule } from '~/modules/Prisma.module'

@Module({
   imports: [PrismaModule],
   controllers: [PassageController],
   providers: [PassageService],
   exports: [PassageService],
})
export class PassageModule {}
