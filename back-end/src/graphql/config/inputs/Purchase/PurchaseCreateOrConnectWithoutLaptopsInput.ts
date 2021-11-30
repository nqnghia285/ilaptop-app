import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PurchaseCreateOrConnectWithoutLaptopsInput: InputTypeConfig<'PurchaseCreateOrConnectWithoutLaptopsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PurchaseCreateOrConnectWithoutLaptopsInput
