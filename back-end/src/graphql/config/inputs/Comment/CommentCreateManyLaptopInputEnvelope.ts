import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentCreateManyLaptopInputEnvelope: InputTypeConfig<'CommentCreateManyLaptopInputEnvelope'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentCreateManyLaptopInputEnvelope
