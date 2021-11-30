import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PurchaseUpdateManyWithWhereWithoutLaptopsInput: InputTypeConfig<'PurchaseUpdateManyWithWhereWithoutLaptopsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PurchaseUpdateManyWithWhereWithoutLaptopsInput
