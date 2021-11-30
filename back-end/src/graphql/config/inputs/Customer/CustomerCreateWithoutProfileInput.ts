import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CustomerCreateWithoutProfileInput: InputTypeConfig<'CustomerCreateWithoutProfileInput'> = {
   fields: {
      _all: [Allow()],
      purchases: [ValidateNested()],
   },
}

export default CustomerCreateWithoutProfileInput
