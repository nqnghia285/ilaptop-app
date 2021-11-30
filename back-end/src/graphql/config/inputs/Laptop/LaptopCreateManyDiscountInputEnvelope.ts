import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopCreateManyDiscountInputEnvelope: InputTypeConfig<'LaptopCreateManyDiscountInputEnvelope'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopCreateManyDiscountInputEnvelope
