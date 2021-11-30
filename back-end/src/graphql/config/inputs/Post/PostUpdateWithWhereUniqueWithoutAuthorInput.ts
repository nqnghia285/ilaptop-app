import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PostUpdateWithWhereUniqueWithoutAuthorInput: InputTypeConfig<'PostUpdateWithWhereUniqueWithoutAuthorInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PostUpdateWithWhereUniqueWithoutAuthorInput
