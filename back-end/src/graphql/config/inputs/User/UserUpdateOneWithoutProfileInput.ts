import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const UserUpdateOneWithoutProfileInput: InputTypeConfig<'UserUpdateOneWithoutProfileInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default UserUpdateOneWithoutProfileInput
