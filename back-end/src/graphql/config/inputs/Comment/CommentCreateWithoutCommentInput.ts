import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length, ValidateNested } from 'class-validator'

const CommentCreateWithoutCommentInput: InputTypeConfig<'CommentCreateWithoutCommentInput'> = {
   fields: {
      _all: [Allow()],
      content: [Length(1, 400)],
      comments: [ValidateNested()],
      laptop: [ValidateNested()],
      author: [ValidateNested()],
   },
}

export default CommentCreateWithoutCommentInput
