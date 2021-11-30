import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PostUpsertWithWhereUniqueWithoutAuthorInput: InputTypeConfig<'PostUpsertWithWhereUniqueWithoutAuthorInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PostUpsertWithWhereUniqueWithoutAuthorInput
