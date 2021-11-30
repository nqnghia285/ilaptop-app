import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PersonCreateOrConnectWithoutCustomerInput: InputTypeConfig<'PersonCreateOrConnectWithoutCustomerInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PersonCreateOrConnectWithoutCustomerInput
