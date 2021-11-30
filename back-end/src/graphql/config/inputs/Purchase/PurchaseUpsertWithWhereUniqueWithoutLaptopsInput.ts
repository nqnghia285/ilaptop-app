import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PurchaseUpsertWithWhereUniqueWithoutLaptopsInput: InputTypeConfig<'PurchaseUpsertWithWhereUniqueWithoutLaptopsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PurchaseUpsertWithWhereUniqueWithoutLaptopsInput
