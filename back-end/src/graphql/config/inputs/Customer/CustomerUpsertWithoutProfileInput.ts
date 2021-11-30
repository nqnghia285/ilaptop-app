import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CustomerUpsertWithoutProfileInput: InputTypeConfig<'CustomerUpsertWithoutProfileInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default CustomerUpsertWithoutProfileInput
