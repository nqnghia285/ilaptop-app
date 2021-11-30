import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PurchaseUpdateManyWithWhereWithoutCustomerInput: InputTypeConfig<'PurchaseUpdateManyWithWhereWithoutCustomerInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PurchaseUpdateManyWithWhereWithoutCustomerInput
