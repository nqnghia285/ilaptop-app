import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const UserUpsertWithoutPostsInput: InputTypeConfig<'UserUpsertWithoutPostsInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default UserUpsertWithoutPostsInput
