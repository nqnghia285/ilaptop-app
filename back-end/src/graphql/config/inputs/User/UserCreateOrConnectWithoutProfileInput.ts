import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const UserCreateOrConnectWithoutProfileInput: InputTypeConfig<'UserCreateOrConnectWithoutProfileInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default UserCreateOrConnectWithoutProfileInput
