import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length } from 'class-validator'

const PostCreateManyInput: InputTypeConfig<'PostCreateManyInput'> = {
   fields: {
      _all: [Allow()],
      title: [Length(1, 255)],
   },
}

export default PostCreateManyInput
