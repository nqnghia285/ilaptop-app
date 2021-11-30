import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length } from 'class-validator'

const UserCreateManyInput: InputTypeConfig<'UserCreateManyInput'> = {
   fields: {
      _all: [Allow()],
      password: [Length(1, 20)],
   },
}

export default UserCreateManyInput
