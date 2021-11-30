import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CommentCreateManyAuthorInputEnvelope: InputTypeConfig<'CommentCreateManyAuthorInputEnvelope'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CommentCreateManyAuthorInputEnvelope
