import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentUpdateManyWithWhereWithoutLaptopInput: InputTypeConfig<'CommentUpdateManyWithWhereWithoutLaptopInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentUpdateManyWithWhereWithoutLaptopInput
