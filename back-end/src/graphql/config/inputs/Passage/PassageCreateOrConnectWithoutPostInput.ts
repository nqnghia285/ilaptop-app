import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PassageCreateOrConnectWithoutPostInput: InputTypeConfig<'PassageCreateOrConnectWithoutPostInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PassageCreateOrConnectWithoutPostInput
