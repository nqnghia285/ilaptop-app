import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length, ValidateNested } from 'class-validator'

const PostCreateWithoutLaptopsInput: InputTypeConfig<'PostCreateWithoutLaptopsInput'> = {
   fields: {
      _all: [Allow()],
      title: [Length(1, 255)],
      author: [ValidateNested()],
      passages: [ValidateNested()],
   },
}

export default PostCreateWithoutLaptopsInput
