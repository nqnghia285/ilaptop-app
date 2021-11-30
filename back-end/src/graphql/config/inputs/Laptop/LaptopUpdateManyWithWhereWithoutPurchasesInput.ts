import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopUpdateManyWithWhereWithoutPurchasesInput: InputTypeConfig<'LaptopUpdateManyWithWhereWithoutPurchasesInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopUpdateManyWithWhereWithoutPurchasesInput
