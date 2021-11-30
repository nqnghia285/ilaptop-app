import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PurchaseUpdateManyWithoutCustomerInput: InputTypeConfig<'PurchaseUpdateManyWithoutCustomerInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PurchaseUpdateManyWithoutCustomerInput
