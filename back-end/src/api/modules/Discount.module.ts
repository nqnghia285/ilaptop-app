import { Module } from '@nestjs/common'
import { DiscountController } from '~/api/controllers'
import { DiscountService } from '~/api/services'
import { PrismaModule } from '~/modules/Prisma.module'

@Module({
   imports: [PrismaModule],
   controllers: [DiscountController],
   providers: [DiscountService],
   exports: [DiscountService],
})
export class DiscountModule {}
