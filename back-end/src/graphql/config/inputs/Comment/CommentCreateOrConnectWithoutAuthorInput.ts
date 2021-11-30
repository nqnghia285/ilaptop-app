import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentCreateOrConnectWithoutAuthorInput: InputTypeConfig<'CommentCreateOrConnectWithoutAuthorInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentCreateOrConnectWithoutAuthorInput
