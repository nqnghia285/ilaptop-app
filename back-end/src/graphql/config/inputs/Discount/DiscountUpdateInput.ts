import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const DiscountUpdateInput: InputTypeConfig<'DiscountUpdateInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default DiscountUpdateInput
