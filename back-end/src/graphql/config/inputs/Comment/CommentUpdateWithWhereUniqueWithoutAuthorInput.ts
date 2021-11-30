import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentUpdateWithWhereUniqueWithoutAuthorInput: InputTypeConfig<'CommentUpdateWithWhereUniqueWithoutAuthorInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentUpdateWithWhereUniqueWithoutAuthorInput
