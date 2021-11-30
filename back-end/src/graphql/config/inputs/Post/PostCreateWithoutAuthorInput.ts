import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length, ValidateNested } from 'class-validator'

const PostCreateWithoutAuthorInput: InputTypeConfig<'PostCreateWithoutAuthorInput'> = {
   fields: {
      _all: [Allow()],
      title: [Length(1, 255)],
      laptops: [ValidateNested()],
      passages: [ValidateNested()],
   },
}

export default PostCreateWithoutAuthorInput
