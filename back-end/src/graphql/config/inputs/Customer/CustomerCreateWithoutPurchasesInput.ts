import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CustomerCreateWithoutPurchasesInput: InputTypeConfig<'CustomerCreateWithoutPurchasesInput'> =
   {
      fields: {
         _all: [Allow()],
         profile: [ValidateNested()],
      },
   }

export default CustomerCreateWithoutPurchasesInput
