import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PostCreateNestedOneWithoutPassagesInput: InputTypeConfig<'PostCreateNestedOneWithoutPassagesInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PostCreateNestedOneWithoutPassagesInput
