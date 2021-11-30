import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PriceMapUpdateOneWithoutLaptopsInput: InputTypeConfig<'PriceMapUpdateOneWithoutLaptopsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PriceMapUpdateOneWithoutLaptopsInput
