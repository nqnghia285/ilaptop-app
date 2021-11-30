import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length, ValidateNested } from 'class-validator'

const UserCreateInput: InputTypeConfig<'UserCreateInput'> = {
   fields: {
      _all: [Allow()],
      password: [Length(1, 20)],
      profile: [ValidateNested()],
      posts: [ValidateNested()],
   },
}

export default UserCreateInput
