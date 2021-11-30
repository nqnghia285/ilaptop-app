import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PurchaseCreateWithoutLaptopsInput: InputTypeConfig<'PurchaseCreateWithoutLaptopsInput'> = {
   fields: {
      _all: [Allow()],
      customer: [ValidateNested()],
   },
}

export default PurchaseCreateWithoutLaptopsInput
