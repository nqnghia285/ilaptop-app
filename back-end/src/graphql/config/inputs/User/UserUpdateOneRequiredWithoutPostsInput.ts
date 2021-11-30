import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const UserUpdateOneRequiredWithoutPostsInput: InputTypeConfig<'UserUpdateOneRequiredWithoutPostsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default UserUpdateOneRequiredWithoutPostsInput
