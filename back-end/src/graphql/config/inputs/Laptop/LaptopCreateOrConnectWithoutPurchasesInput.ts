import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopCreateOrConnectWithoutPurchasesInput: InputTypeConfig<'LaptopCreateOrConnectWithoutPurchasesInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopCreateOrConnectWithoutPurchasesInput
