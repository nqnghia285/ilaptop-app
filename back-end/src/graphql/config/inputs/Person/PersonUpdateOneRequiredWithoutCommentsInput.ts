import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PersonUpdateOneRequiredWithoutCommentsInput: InputTypeConfig<'PersonUpdateOneRequiredWithoutCommentsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PersonUpdateOneRequiredWithoutCommentsInput
