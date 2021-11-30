import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'
import { LengthForUpdateField } from '~/graphql/decorators'

const UserUpdateInput: InputTypeConfig<'UserUpdateInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
      password: [LengthForUpdateField(1, 20)],
   },
}

export default UserUpdateInput
