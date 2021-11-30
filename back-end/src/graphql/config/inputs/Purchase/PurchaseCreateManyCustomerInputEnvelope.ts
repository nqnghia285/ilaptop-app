import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PurchaseCreateManyCustomerInputEnvelope: InputTypeConfig<'PurchaseCreateManyCustomerInputEnvelope'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PurchaseCreateManyCustomerInputEnvelope
