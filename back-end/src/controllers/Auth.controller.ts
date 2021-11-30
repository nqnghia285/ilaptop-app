import { Controller, Post, Request, Response, UseGuards } from '@nestjs/common'
import express from 'express'
import { LocalAuthGuard } from '~/guards'
import { IResponse, IUserInfo } from '~/interfaces'
import { ApiConfigService, AuthService } from '~/services'

@Controller('auth')
export class AuthController {
   constructor(private authService: AuthService, private apiConfig: ApiConfigService) {}

   @Post('login')
   @UseGuards(LocalAuthGuard)
   login(@Request() req: express.Request, @Response() res: express.Response) {
      const response: IResponse = { isSuccess: false, message: 'Login is failed!' }

      if (req.user) {
         const token = this.authService.createJWT(req.user)

         res.cookie(this.apiConfig.system.token_name, token, {
            httpOnly: true,
         })

         response.isSuccess = true
         response.message = 'Login is success!'
         response.profile = <IUserInfo>req.user
      }

      return res.send(response)
   }
}
