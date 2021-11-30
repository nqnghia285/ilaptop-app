import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentUpdateManyWithoutAuthorInput: InputTypeConfig<'CommentUpdateManyWithoutAuthorInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentUpdateManyWithoutAuthorInput
