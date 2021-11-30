import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length, ValidateNested } from 'class-validator'

const CommentCreateInput: InputTypeConfig<'CommentCreateInput'> = {
   fields: {
      _all: [Allow()],
      author: [ValidateNested()],
      comment: [ValidateNested()],
      comments: [ValidateNested()],
      content: [Length(1, 400)],
      laptop: [ValidateNested()],
   },
}

export default CommentCreateInput
