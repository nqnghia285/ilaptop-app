import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentUpdateWithWhereUniqueWithoutLaptopInput: InputTypeConfig<'CommentUpdateWithWhereUniqueWithoutLaptopInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentUpdateWithWhereUniqueWithoutLaptopInput
