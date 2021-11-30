import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopUpdateWithWhereUniqueWithoutPurchasesInput: InputTypeConfig<'LaptopUpdateWithWhereUniqueWithoutPurchasesInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopUpdateWithWhereUniqueWithoutPurchasesInput
