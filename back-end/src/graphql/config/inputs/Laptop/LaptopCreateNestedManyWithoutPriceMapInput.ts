import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopCreateNestedManyWithoutPriceMapInput: InputTypeConfig<'LaptopCreateNestedManyWithoutPriceMapInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopCreateNestedManyWithoutPriceMapInput
