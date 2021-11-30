import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length, ValidateNested } from 'class-validator'

const CommentCreateWithoutAuthorInput: InputTypeConfig<'CommentCreateWithoutAuthorInput'> = {
   fields: {
      _all: [Allow()],
      content: [Length(1, 400)],
      comment: [ValidateNested()],
      comments: [ValidateNested()],
      laptop: [ValidateNested()],
   },
}

export default CommentCreateWithoutAuthorInput
