import { applyDecorators } from '@nestjs/common'
import { ClassType } from 'type-graphql'
import { JwtAuthenticated, Roles, ValidateInputs } from '~/graphql/decorators'

export function AuthAndValidateGql(roles: string[], classType: ClassType<object>) {
   return applyDecorators(ValidateInputs(classType), Roles(...roles), JwtAuthenticated)
}
