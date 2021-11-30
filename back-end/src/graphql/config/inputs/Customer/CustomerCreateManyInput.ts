import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, IsUUID } from 'class-validator'

const CustomerCreateManyInputConfig: InputTypeConfig<'CustomerCreateManyInput'> = {
   fields: {
      _all: [Allow()],
      id: [IsUUID()],
   },
}

export default CustomerCreateManyInputConfig
