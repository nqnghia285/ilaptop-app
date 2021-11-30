import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, IsPositive, Length } from 'class-validator'

const CommentCreateManyAuthorInput: InputTypeConfig<'CommentCreateManyAuthorInput'> = {
   fields: {
      _all: [Allow()],
      content: [Length(1, 400)],
      commentId: [IsPositive()],
      laptopId: [IsPositive()],
   },
}

export default CommentCreateManyAuthorInput
