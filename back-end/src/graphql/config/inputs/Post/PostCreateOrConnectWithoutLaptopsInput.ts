import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PostCreateOrConnectWithoutLaptopsInput: InputTypeConfig<'PostCreateOrConnectWithoutLaptopsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PostCreateOrConnectWithoutLaptopsInput
