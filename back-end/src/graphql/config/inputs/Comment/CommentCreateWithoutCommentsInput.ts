import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length, ValidateNested } from 'class-validator'

const CommentCreateWithoutCommentsInput: InputTypeConfig<'CommentCreateWithoutCommentsInput'> = {
   fields: {
      _all: [Allow()],
      content: [Length(1, 400)],
      laptop: [ValidateNested()],
      author: [ValidateNested()],
      comment: [ValidateNested()],
   },
}

export default CommentCreateWithoutCommentsInput
