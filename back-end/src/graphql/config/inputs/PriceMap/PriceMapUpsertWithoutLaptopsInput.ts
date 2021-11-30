import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PriceMapUpsertWithoutLaptopsInput: InputTypeConfig<'PriceMapUpsertWithoutLaptopsInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default PriceMapUpsertWithoutLaptopsInput
