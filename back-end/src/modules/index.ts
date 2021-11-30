import { Module } from '@nestjs/common'
import { ApiConfigModule } from '~/modules/ApiConfig.module'
import { AuthModule } from '~/modules/Auth.module'
import { PrismaModule } from '~/modules/Prisma.module'

@Module({
   imports: [PrismaModule, AuthModule, ApiConfigModule],
   exports: [PrismaModule, AuthModule, ApiConfigModule],
})
export class GlobalModules {}
