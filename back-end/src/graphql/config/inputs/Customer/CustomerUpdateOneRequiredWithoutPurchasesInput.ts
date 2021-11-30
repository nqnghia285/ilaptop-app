import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CustomerUpdateOneRequiredWithoutPurchasesInput: InputTypeConfig<'CustomerUpdateOneRequiredWithoutPurchasesInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CustomerUpdateOneRequiredWithoutPurchasesInput
