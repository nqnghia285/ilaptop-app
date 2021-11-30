import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length, ValidateNested } from 'class-validator'

const PostCreateWithoutPassagesInput: InputTypeConfig<'PostCreateWithoutPassagesInput'> = {
   fields: {
      _all: [Allow()],
      title: [Length(1, 255)],
      author: [ValidateNested()],
      laptops: [ValidateNested()],
   },
}

export default PostCreateWithoutPassagesInput
