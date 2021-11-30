import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PurchaseUpdateWithoutCustomerInput: InputTypeConfig<'PurchaseUpdateWithoutCustomerInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default PurchaseUpdateWithoutCustomerInput
