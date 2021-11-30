import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PostUpsertWithWhereUniqueWithoutLaptopsInput: InputTypeConfig<'PostUpsertWithWhereUniqueWithoutLaptopsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PostUpsertWithWhereUniqueWithoutLaptopsInput
