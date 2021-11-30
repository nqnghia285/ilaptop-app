import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PostCreateNestedManyWithoutLaptopsInput: InputTypeConfig<'PostCreateNestedManyWithoutLaptopsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PostCreateNestedManyWithoutLaptopsInput
