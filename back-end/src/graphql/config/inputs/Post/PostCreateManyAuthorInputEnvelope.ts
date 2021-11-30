import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PostCreateManyAuthorInputEnvelope: InputTypeConfig<'PostCreateManyAuthorInputEnvelope'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default PostCreateManyAuthorInputEnvelope
