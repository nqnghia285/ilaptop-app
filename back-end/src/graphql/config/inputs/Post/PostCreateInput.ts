import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length, ValidateNested } from 'class-validator'

const PostCreateInput: InputTypeConfig<'PostCreateInput'> = {
   fields: {
      _all: [Allow()],
      title: [Length(1, 255)],
      author: [ValidateNested()],
      laptops: [ValidateNested()],
      passages: [ValidateNested()],
   },
}

export default PostCreateInput
