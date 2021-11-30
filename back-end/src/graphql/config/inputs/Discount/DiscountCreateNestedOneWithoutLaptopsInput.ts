import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const DiscountCreateNestedOneWithoutLaptopsInput: InputTypeConfig<'DiscountCreateNestedOneWithoutLaptopsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default DiscountCreateNestedOneWithoutLaptopsInput
