import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PurchaseUpdateInput: InputTypeConfig<'PurchaseUpdateInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default PurchaseUpdateInput
