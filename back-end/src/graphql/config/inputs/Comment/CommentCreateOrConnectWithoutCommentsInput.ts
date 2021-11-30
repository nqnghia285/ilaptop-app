import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentCreateOrConnectWithoutCommentsInput: InputTypeConfig<'CommentCreateOrConnectWithoutCommentsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentCreateOrConnectWithoutCommentsInput
