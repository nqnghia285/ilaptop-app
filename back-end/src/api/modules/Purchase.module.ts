import { Module } from '@nestjs/common'
import { PurchaseController } from '~/api/controllers'
import { PurchaseService } from '~/api/services'
import { PrismaModule } from '~/modules/Prisma.module'

@Module({
   imports: [PrismaModule],
   controllers: [PurchaseController],
   providers: [PurchaseService],
   exports: [PurchaseService],
})
export class PurchaseModule {}
