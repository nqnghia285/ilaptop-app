import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentCreateOrConnectWithoutLaptopInput: InputTypeConfig<'CommentCreateOrConnectWithoutLaptopInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentCreateOrConnectWithoutLaptopInput
