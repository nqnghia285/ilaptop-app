import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const DiscountUpdateManyMutationInput: InputTypeConfig<'DiscountUpdateManyMutationInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default DiscountUpdateManyMutationInput
