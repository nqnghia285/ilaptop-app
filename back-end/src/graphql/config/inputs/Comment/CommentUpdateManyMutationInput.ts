import { InputTypeConfig } from '@generated/type-graphql'
import { Allow } from 'class-validator'
import { LengthForUpdateField } from '~/graphql/decorators'

const CommentUpdateManyMutationInput: InputTypeConfig<'CommentUpdateManyMutationInput'> = {
   fields: {
      _all: [Allow()],
      content: [LengthForUpdateField(1, 400)],
   },
}

export default CommentUpdateManyMutationInput
