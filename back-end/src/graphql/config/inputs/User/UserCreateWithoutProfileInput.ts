import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length, ValidateNested } from 'class-validator'

const UserCreateWithoutProfileInput: InputTypeConfig<'UserCreateWithoutProfileInput'> = {
   fields: {
      _all: [Allow()],
      password: [Length(1, 20)],
      posts: [ValidateNested()],
   },
}

export default UserCreateWithoutProfileInput
