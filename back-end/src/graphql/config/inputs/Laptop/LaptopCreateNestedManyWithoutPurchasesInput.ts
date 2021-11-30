import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopCreateNestedManyWithoutPurchasesInput: InputTypeConfig<'LaptopCreateNestedManyWithoutPurchasesInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopCreateNestedManyWithoutPurchasesInput
