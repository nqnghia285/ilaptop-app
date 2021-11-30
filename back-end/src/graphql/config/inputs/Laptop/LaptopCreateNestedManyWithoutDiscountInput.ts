import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopCreateNestedManyWithoutDiscountInput: InputTypeConfig<'LaptopCreateNestedManyWithoutDiscountInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopCreateNestedManyWithoutDiscountInput
