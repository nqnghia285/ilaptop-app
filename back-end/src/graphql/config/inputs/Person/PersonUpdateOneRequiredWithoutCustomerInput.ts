import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PersonUpdateOneRequiredWithoutCustomerInput: InputTypeConfig<'PersonUpdateOneRequiredWithoutCustomerInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PersonUpdateOneRequiredWithoutCustomerInput
