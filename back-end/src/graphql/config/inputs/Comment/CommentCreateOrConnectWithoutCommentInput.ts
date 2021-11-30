import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentCreateOrConnectWithoutCommentInput: InputTypeConfig<'CommentCreateOrConnectWithoutCommentInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentCreateOrConnectWithoutCommentInput
