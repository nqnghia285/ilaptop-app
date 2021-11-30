import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'
import { LengthForUpdateField } from '~/graphql/decorators'

const UserUpdateWithoutProfileInput: InputTypeConfig<'UserUpdateWithoutProfileInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
      password: [LengthForUpdateField(1, 20)],
   },
}

export default UserUpdateWithoutProfileInput
