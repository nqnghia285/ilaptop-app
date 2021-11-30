import { applyDecorators } from '@nestjs/common'
import { JwtAuthenticated, Roles } from '~/graphql/decorators'

export function AuthGql(...roles: string[]) {
   return applyDecorators(Roles(...roles), JwtAuthenticated)
}
