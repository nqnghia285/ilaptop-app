import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentUpsertWithoutCommentsInput: InputTypeConfig<'CommentUpsertWithoutCommentsInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default CommentUpsertWithoutCommentsInput
