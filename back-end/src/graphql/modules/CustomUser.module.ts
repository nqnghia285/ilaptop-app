import { Module } from '@nestjs/common'
import { LoginUserResolver } from '~/graphql/resolvers'
import { ApiConfigModule } from '~/modules/ApiConfig.module'
import { AuthModule } from '~/modules/Auth.module'

@Module({
   imports: [AuthModule, ApiConfigModule],
   providers: [LoginUserResolver],
   exports: [AuthModule],
})
export class CustomUserModule {}
