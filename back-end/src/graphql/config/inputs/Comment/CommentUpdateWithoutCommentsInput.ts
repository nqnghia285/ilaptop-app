import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'
import { LengthForUpdateField } from '~/graphql/decorators'

const CommentUpdateWithoutCommentsInput: InputTypeConfig<'CommentUpdateWithoutCommentsInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
      content: [LengthForUpdateField(1, 400)],
   },
}

export default CommentUpdateWithoutCommentsInput
