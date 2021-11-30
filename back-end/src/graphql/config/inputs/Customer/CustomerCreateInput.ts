import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CustomerCreateInputConfig: InputTypeConfig<'CustomerCreateInput'> = {
   fields: {
      _all: [Allow()],
      profile: [ValidateNested()],
      purchases: [ValidateNested()],
   },
}

export default CustomerCreateInputConfig
