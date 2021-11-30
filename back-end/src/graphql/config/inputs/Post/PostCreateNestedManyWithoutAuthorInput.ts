import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PostCreateNestedManyWithoutAuthorInput: InputTypeConfig<'PostCreateNestedManyWithoutAuthorInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PostCreateNestedManyWithoutAuthorInput
