import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopCreateManyPriceMapInputEnvelope: InputTypeConfig<'LaptopCreateManyPriceMapInputEnvelope'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopCreateManyPriceMapInputEnvelope
