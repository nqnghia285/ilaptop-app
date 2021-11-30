import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const DiscountUpsertWithoutLaptopsInput: InputTypeConfig<'DiscountUpsertWithoutLaptopsInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default DiscountUpsertWithoutLaptopsInput
