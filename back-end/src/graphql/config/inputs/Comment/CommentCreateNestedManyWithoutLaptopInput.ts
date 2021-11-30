import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentCreateNestedManyWithoutLaptopInput: InputTypeConfig<'CommentCreateNestedManyWithoutLaptopInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentCreateNestedManyWithoutLaptopInput
