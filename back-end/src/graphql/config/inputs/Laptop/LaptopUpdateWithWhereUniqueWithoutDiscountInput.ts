import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopUpdateWithWhereUniqueWithoutDiscountInput: InputTypeConfig<'LaptopUpdateWithWhereUniqueWithoutDiscountInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopUpdateWithWhereUniqueWithoutDiscountInput
