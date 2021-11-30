import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Request } from 'express'
import { IUserInfo } from '~/interfaces'

@Injectable()
export class RolesGuard implements CanActivate {
   constructor(private reflector: Reflector) {}

   canActivate(context: ExecutionContext): boolean {
      const roles = this.reflector.get<string[]>('roles', context.getHandler())

      if (!roles) {
         return true
      }

      const request = context.switchToHttp().getRequest<Request>()
      const user = <IUserInfo>request.user

      return roles.includes(user.role)
   }
}
