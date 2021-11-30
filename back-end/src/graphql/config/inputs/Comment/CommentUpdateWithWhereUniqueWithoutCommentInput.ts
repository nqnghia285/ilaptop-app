import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentUpdateWithWhereUniqueWithoutCommentInput: InputTypeConfig<'CommentUpdateWithWhereUniqueWithoutCommentInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentUpdateWithWhereUniqueWithoutCommentInput
