import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PriceMapCreateInput: InputTypeConfig<'PriceMapCreateInput'> = {
   fields: {
      _all: [Allow()],
      laptops: [ValidateNested()],
   },
}

export default PriceMapCreateInput
