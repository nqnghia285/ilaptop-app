import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CustomerUpdateWithoutProfileInput: InputTypeConfig<'CustomerUpdateWithoutProfileInput'> = {
   fields: {
      _all: [Allow()],
      purchases: [ValidateNested()],
   },
}

export default CustomerUpdateWithoutProfileInput
