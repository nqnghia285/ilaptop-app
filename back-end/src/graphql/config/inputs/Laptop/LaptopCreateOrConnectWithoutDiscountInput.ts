import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopCreateOrConnectWithoutDiscountInput: InputTypeConfig<'LaptopCreateOrConnectWithoutDiscountInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopCreateOrConnectWithoutDiscountInput
