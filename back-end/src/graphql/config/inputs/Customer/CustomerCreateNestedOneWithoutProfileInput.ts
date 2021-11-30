import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const CustomerCreateNestedOneWithoutProfileInputConfig: InputTypeConfig<'CustomerCreateNestedOneWithoutProfileInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default CustomerCreateNestedOneWithoutProfileInputConfig
