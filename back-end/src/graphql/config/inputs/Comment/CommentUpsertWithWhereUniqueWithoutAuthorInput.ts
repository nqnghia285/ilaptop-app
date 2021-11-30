import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentUpsertWithWhereUniqueWithoutAuthorInput: InputTypeConfig<'CommentUpsertWithWhereUniqueWithoutAuthorInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentUpsertWithWhereUniqueWithoutAuthorInput
