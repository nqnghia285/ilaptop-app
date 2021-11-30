import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthController } from '~/controllers'
import { PrismaModule } from '~/modules/Prisma.module'
import { ApiConfigService, AuthService } from '~/services'
import { JwtStrategy, LocalStrategy } from '~/strategies'
import { ApiConfigModule } from '~/modules/ApiConfig.module'

@Module({
   imports: [
      ConfigModule,
      ApiConfigModule,
      JwtModule.registerAsync({
         imports: [ApiConfigModule],
         inject: [ApiConfigService],
         useFactory: async (config: ApiConfigService) => ({
            secret: config.system.jwt_key,
         }),
      }),
      PassportModule,
      PrismaModule,
   ],
   controllers: [AuthController],
   providers: [LocalStrategy, JwtStrategy, AuthService],
   exports: [AuthService],
})
export class AuthModule {}
