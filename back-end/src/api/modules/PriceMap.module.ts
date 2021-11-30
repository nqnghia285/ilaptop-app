import { Module } from '@nestjs/common'
import { PriceMapController } from '~/api/controllers'
import { PriceMapService } from '~/api/services'
import { PrismaModule } from '~/modules/Prisma.module'

@Module({
   imports: [PrismaModule],
   controllers: [PriceMapController],
   providers: [PriceMapService],
   exports: [PriceMapService],
})
export class PriceMapModule {}
