import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopUpdateManyWithoutDiscountInput: InputTypeConfig<'LaptopUpdateManyWithoutDiscountInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopUpdateManyWithoutDiscountInput
