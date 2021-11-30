import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopUpsertWithWhereUniqueWithoutPurchasesInput: InputTypeConfig<'LaptopUpsertWithWhereUniqueWithoutPurchasesInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopUpsertWithWhereUniqueWithoutPurchasesInput
