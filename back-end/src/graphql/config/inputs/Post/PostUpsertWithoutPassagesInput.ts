import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PostUpsertWithoutPassagesInput: InputTypeConfig<'PostUpsertWithoutPassagesInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default PostUpsertWithoutPassagesInput
