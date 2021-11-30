import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const UserCreateOrConnectWithoutPostsInput: InputTypeConfig<'UserCreateOrConnectWithoutPostsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default UserCreateOrConnectWithoutPostsInput
