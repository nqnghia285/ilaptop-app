import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const UserCreateNestedOneWithoutProfileInput: InputTypeConfig<'UserCreateNestedOneWithoutProfileInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default UserCreateNestedOneWithoutProfileInput
