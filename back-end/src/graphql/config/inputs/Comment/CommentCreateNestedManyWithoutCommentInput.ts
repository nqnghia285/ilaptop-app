import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentCreateNestedManyWithoutCommentInput: InputTypeConfig<'CommentCreateNestedManyWithoutCommentInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentCreateNestedManyWithoutCommentInput
