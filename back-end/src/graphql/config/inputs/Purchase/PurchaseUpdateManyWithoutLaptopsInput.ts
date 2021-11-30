import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PurchaseUpdateManyWithoutLaptopsInput: InputTypeConfig<'PurchaseUpdateManyWithoutLaptopsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PurchaseUpdateManyWithoutLaptopsInput
