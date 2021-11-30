import { User } from '@generated/type-graphql'
import { Injectable } from '@nestjs/common'
import { Args, Ctx, Query, Resolver } from 'type-graphql'
import { LoginArgs, Response } from '~/graphql/typedefs'
import { IContext } from '~/interfaces'
import { ApiConfigService, AuthService } from '~/services'

@Injectable()
@Resolver(() => User)
export class LoginUserResolver {
   constructor(private authService: AuthService, private apiConfig: ApiConfigService) {}

   @Query(() => Response)
   async login(
      @Args() { email, password }: LoginArgs,
      @Ctx() { res }: IContext
   ): Promise<Response> {
      const response: Response = { isSuccess: false, message: 'Login is failed' }

      const profile = await this.authService.validateUser(email, password)

      if (profile) {
         const token = this.authService.createJWT(profile)
         res.cookie(this.apiConfig.system.token_name, token, {
            httpOnly: true,
         })
         response.isSuccess = true
         response.message = 'Login is successful'
      }

      return response
   }
}
