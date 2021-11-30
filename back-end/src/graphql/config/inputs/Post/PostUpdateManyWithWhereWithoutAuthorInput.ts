import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PostUpdateManyWithWhereWithoutAuthorInput: InputTypeConfig<'PostUpdateManyWithWhereWithoutAuthorInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PostUpdateManyWithWhereWithoutAuthorInput
