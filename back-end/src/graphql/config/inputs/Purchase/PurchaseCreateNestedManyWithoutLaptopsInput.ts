import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PurchaseCreateNestedManyWithoutLaptopsInput: InputTypeConfig<'PurchaseCreateNestedManyWithoutLaptopsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PurchaseCreateNestedManyWithoutLaptopsInput
