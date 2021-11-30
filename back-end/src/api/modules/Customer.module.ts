import { Module } from '@nestjs/common'
import { CustomerController } from '~/api/controllers'
import { CustomerService } from '~/api/services'
import { PrismaModule } from '~/modules/Prisma.module'

@Module({
   imports: [PrismaModule],
   controllers: [CustomerController],
   providers: [CustomerService],
   exports: [CustomerService],
})
export class CustomerModule {}
