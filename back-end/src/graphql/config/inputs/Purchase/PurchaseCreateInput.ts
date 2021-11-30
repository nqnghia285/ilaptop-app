import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PurchaseCreateInput: InputTypeConfig<'PurchaseCreateInput'> = {
   fields: {
      _all: [Allow()],
      laptops: [ValidateNested()],
      customer: [ValidateNested()],
   },
}

export default PurchaseCreateInput
