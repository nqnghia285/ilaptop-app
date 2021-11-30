import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CustomerCreateOrConnectWithoutProfileInput: InputTypeConfig<'CustomerCreateOrConnectWithoutProfileInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CustomerCreateOrConnectWithoutProfileInput
