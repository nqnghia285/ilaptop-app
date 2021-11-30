import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PurchaseUpdateWithWhereUniqueWithoutLaptopsInput: InputTypeConfig<'PurchaseUpdateWithWhereUniqueWithoutLaptopsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PurchaseUpdateWithWhereUniqueWithoutLaptopsInput
