import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PostUpdateWithWhereUniqueWithoutLaptopsInput: InputTypeConfig<'PostUpdateWithWhereUniqueWithoutLaptopsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PostUpdateWithWhereUniqueWithoutLaptopsInput
