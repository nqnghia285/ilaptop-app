import { Module } from '@nestjs/common'
import { PersonController } from '~/api/controllers'
import { PersonService } from '~/api/services'
import { PrismaModule } from '~/modules/Prisma.module'

@Module({
   imports: [PrismaModule],
   controllers: [PersonController],
   providers: [PersonService],
   exports: [PersonService],
})
export class PersonModule {}
