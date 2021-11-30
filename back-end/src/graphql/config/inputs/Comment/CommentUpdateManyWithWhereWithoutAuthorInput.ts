import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentUpdateManyWithWhereWithoutAuthorInput: InputTypeConfig<'CommentUpdateManyWithWhereWithoutAuthorInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentUpdateManyWithWhereWithoutAuthorInput
