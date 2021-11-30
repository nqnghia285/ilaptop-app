import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PersonCreateNestedOneWithoutCommentsInput: InputTypeConfig<'PersonCreateNestedOneWithoutCommentsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PersonCreateNestedOneWithoutCommentsInput
