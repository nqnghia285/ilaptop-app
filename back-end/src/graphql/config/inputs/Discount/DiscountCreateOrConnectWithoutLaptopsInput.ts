import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const DiscountCreateOrConnectWithoutLaptopsInput: InputTypeConfig<'DiscountCreateOrConnectWithoutLaptopsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default DiscountCreateOrConnectWithoutLaptopsInput
