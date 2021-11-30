import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PostUpdateManyWithoutAuthorInput: InputTypeConfig<'PostUpdateManyWithoutAuthorInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default PostUpdateManyWithoutAuthorInput
