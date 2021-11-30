import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PurchaseCreateWithoutCustomerInput: InputTypeConfig<'PurchaseCreateWithoutCustomerInput'> = {
   fields: {
      _all: [Allow()],
      laptops: [ValidateNested()],
   },
}

export default PurchaseCreateWithoutCustomerInput
