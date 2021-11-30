import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const UserCreateNestedOneWithoutPostsInput: InputTypeConfig<'UserCreateNestedOneWithoutPostsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default UserCreateNestedOneWithoutPostsInput
