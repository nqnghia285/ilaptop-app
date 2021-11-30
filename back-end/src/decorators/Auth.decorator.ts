import { applyDecorators, UseGuards } from '@nestjs/common'
import { Roles } from '~/decorators'
import { JwtAuthGuard, RolesGuard } from '~/guards'

export function Auth(...roles: string[]) {
   return applyDecorators(Roles(...roles), UseGuards(JwtAuthGuard, RolesGuard))
}
