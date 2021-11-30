import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length, ValidateNested } from 'class-validator'

const UserCreateWithoutPostsInput: InputTypeConfig<'UserCreateWithoutPostsInput'> = {
   fields: {
      _all: [Allow()],
      password: [Length(1, 20)],
      profile: [ValidateNested()],
   },
}

export default UserCreateWithoutPostsInput
