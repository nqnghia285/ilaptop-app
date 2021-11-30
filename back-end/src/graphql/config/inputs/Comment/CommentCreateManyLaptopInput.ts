import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length } from 'class-validator'

const CommentCreateManyLaptopInput: InputTypeConfig<'CommentCreateManyLaptopInput'> = {
   fields: {
      _all: [Allow()],
      content: [Length(1, 400)],
   },
}

export default CommentCreateManyLaptopInput
