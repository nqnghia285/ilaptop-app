import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentCreateManyCommentInputEnvelope: InputTypeConfig<'CommentCreateManyCommentInputEnvelope'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentCreateManyCommentInputEnvelope
