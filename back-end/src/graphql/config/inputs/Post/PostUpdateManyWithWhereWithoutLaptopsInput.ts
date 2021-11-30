import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PostUpdateManyWithWhereWithoutLaptopsInput: InputTypeConfig<'PostUpdateManyWithWhereWithoutLaptopsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PostUpdateManyWithWhereWithoutLaptopsInput
