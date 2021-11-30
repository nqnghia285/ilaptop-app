import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PurchaseUpdateWithoutLaptopsInput: InputTypeConfig<'PurchaseUpdateWithoutLaptopsInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default PurchaseUpdateWithoutLaptopsInput
