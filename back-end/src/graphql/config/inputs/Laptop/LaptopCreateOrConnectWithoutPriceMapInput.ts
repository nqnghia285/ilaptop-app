import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopCreateOrConnectWithoutPriceMapInput: InputTypeConfig<'LaptopCreateOrConnectWithoutPriceMapInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopCreateOrConnectWithoutPriceMapInput
