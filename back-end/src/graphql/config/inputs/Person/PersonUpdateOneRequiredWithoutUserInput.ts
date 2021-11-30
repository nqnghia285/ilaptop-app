import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PersonUpdateOneRequiredWithoutUserInput: InputTypeConfig<'PersonUpdateOneRequiredWithoutUserInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PersonUpdateOneRequiredWithoutUserInput
