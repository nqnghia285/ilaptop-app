import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentUpdateManyWithoutLaptopInput: InputTypeConfig<'CommentUpdateManyWithoutLaptopInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentUpdateManyWithoutLaptopInput
