import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CustomerUpdateWithoutPurchasesInput: InputTypeConfig<'CustomerUpdateWithoutPurchasesInput'> =
   {
      fields: {
         _all: [Allow()],
         profile: [ValidateNested()],
      },
   }

export default CustomerUpdateWithoutPurchasesInput
