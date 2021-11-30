import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const DiscountUpdateOneWithoutLaptopsInput: InputTypeConfig<'DiscountUpdateOneWithoutLaptopsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default DiscountUpdateOneWithoutLaptopsInput
