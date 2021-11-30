import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentCreateNestedOneWithoutCommentsInput: InputTypeConfig<'CommentCreateNestedOneWithoutCommentsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentCreateNestedOneWithoutCommentsInput
