import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PersonUpsertWithoutCustomerInput: InputTypeConfig<'PersonUpsertWithoutCustomerInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default PersonUpsertWithoutCustomerInput
