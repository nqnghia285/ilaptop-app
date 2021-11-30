import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopUpdateManyWithWhereWithoutDiscountInput: InputTypeConfig<'LaptopUpdateManyWithWhereWithoutDiscountInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopUpdateManyWithWhereWithoutDiscountInput
