import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length } from 'class-validator'

const CommentCreateManyInput: InputTypeConfig<'CommentCreateManyInput'> = {
   fields: {
      _all: [Allow()],
      content: [Length(1, 400)],
   },
}

export default CommentCreateManyInput
