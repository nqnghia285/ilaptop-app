import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CustomerUpdateOneWithoutProfileInput: InputTypeConfig<'CustomerUpdateOneWithoutProfileInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CustomerUpdateOneWithoutProfileInput
