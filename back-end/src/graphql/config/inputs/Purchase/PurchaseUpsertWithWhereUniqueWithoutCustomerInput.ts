import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PurchaseUpsertWithWhereUniqueWithoutCustomerInput: InputTypeConfig<'PurchaseUpsertWithWhereUniqueWithoutCustomerInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PurchaseUpsertWithWhereUniqueWithoutCustomerInput
