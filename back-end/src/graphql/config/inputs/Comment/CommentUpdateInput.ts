import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'
import { LengthForUpdateField } from '~/graphql/decorators'

const CommentUpdateInput: InputTypeConfig<'CommentUpdateInput'> = {
   fields: {
      _all: [Allow()],
      author: [ValidateNested()],
      comment: [ValidateNested()],
      comments: [ValidateNested()],
      content: [LengthForUpdateField(1, 400)],
      laptop: [ValidateNested()],
   },
}

export default CommentUpdateInput
