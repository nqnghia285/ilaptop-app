import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CustomerCreateOrConnectWithoutPurchasesInput: InputTypeConfig<'CustomerCreateOrConnectWithoutPurchasesInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CustomerCreateOrConnectWithoutPurchasesInput
