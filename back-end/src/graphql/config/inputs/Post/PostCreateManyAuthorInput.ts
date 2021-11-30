import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length } from 'class-validator'

const PostCreateManyAuthorInput: InputTypeConfig<'PostCreateManyAuthorInput'> = {
   fields: {
      _all: [Allow()],
      title: [Length(1, 255)],
   },
}

export default PostCreateManyAuthorInput
