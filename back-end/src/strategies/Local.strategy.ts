import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { AuthService } from '~/services'
import { IUserInfo } from '~/interfaces'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
   constructor(private authService: AuthService) {
      super()
   }

   async validate(username: string, password: string): Promise<IUserInfo> {
      const profile = await this.authService.validateUser(username, password)

      if (!profile) {
         throw new UnauthorizedException()
      }

      return profile
   }
}
