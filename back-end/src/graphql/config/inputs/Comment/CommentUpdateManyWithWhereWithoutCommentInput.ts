import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentUpdateManyWithWhereWithoutCommentInput: InputTypeConfig<'CommentUpdateManyWithWhereWithoutCommentInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentUpdateManyWithWhereWithoutCommentInput
