import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length, ValidateNested } from 'class-validator'

const CommentCreateWithoutLaptopInput: InputTypeConfig<'CommentCreateWithoutLaptopInput'> = {
   fields: {
      _all: [Allow()],
      content: [Length(1, 400)],
      author: [ValidateNested()],
      comment: [ValidateNested()],
      comments: [ValidateNested()],
   },
}

export default CommentCreateWithoutLaptopInput
