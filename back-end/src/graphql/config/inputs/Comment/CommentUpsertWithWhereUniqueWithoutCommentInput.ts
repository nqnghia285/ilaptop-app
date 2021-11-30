import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentUpsertWithWhereUniqueWithoutCommentInput: InputTypeConfig<'CommentUpsertWithWhereUniqueWithoutCommentInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentUpsertWithWhereUniqueWithoutCommentInput
