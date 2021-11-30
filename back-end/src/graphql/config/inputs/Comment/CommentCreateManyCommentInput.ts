import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length } from 'class-validator'

const CommentCreateManyCommentInput: InputTypeConfig<'CommentCreateManyCommentInput'> = {
   fields: {
      _all: [Allow()],
      content: [Length(1, 400)],
   },
}

export default CommentCreateManyCommentInput
