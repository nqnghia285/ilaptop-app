import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const UserUpsertWithoutProfileInput: InputTypeConfig<'UserUpsertWithoutProfileInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default UserUpsertWithoutProfileInput
