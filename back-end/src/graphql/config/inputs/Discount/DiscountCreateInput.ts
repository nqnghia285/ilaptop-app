import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const DiscountCreateInput: InputTypeConfig<'DiscountCreateInput'> = {
   fields: {
      _all: [Allow()],
      laptops: [ValidateNested()],
   },
}

export default DiscountCreateInput
