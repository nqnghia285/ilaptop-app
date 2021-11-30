import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentUpdateManyWithoutCommentInput: InputTypeConfig<'CommentUpdateManyWithoutCommentInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentUpdateManyWithoutCommentInput
