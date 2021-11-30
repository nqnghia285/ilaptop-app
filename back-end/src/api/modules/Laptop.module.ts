import { Module } from '@nestjs/common'
import { LaptopController } from '~/api/controllers'
import { LaptopService } from '~/api/services'
import { PrismaModule } from '~/modules/Prisma.module'

@Module({
   imports: [PrismaModule],
   controllers: [LaptopController],
   providers: [LaptopService],
   exports: [LaptopService],
})
export class LaptopModule {}
