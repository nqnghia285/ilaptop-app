import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PurchaseCreateNestedManyWithoutCustomerInput: InputTypeConfig<'PurchaseCreateNestedManyWithoutCustomerInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PurchaseCreateNestedManyWithoutCustomerInput
