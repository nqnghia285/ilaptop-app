import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PostUpdateManyWithoutLaptopsInput: InputTypeConfig<'PostUpdateManyWithoutLaptopsInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default PostUpdateManyWithoutLaptopsInput
