import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'
import { LengthForUpdateField } from '~/graphql/decorators'

const PostUpdateWithoutAuthorInput: InputTypeConfig<'PostUpdateWithoutAuthorInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
      title: [LengthForUpdateField(1, 255)],
   },
}

export default PostUpdateWithoutAuthorInput
