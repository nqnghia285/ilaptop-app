import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PostCreateOrConnectWithoutAuthorInput: InputTypeConfig<'PostCreateOrConnectWithoutAuthorInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PostCreateOrConnectWithoutAuthorInput
