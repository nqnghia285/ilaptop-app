import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'
import { LengthForUpdateField } from '~/graphql/decorators'

const PostUpdateInput: InputTypeConfig<'PostUpdateInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
      title: [LengthForUpdateField(1, 255)],
   },
}

export default PostUpdateInput
