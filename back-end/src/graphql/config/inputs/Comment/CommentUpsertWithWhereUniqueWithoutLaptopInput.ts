import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentUpsertWithWhereUniqueWithoutLaptopInput: InputTypeConfig<'CommentUpsertWithWhereUniqueWithoutLaptopInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentUpsertWithWhereUniqueWithoutLaptopInput
