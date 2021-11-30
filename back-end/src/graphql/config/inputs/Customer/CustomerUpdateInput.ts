import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CustomerUpdateInput: InputTypeConfig<'CustomerUpdateInput'> = {
   fields: {
      _all: [Allow()],
      profile: [ValidateNested()],
      purchases: [ValidateNested()],
   },
}

export default CustomerUpdateInput
