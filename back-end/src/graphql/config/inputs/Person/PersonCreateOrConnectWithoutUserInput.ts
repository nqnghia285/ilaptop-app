import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PersonCreateOrConnectWithoutUserInput: InputTypeConfig<'PersonCreateOrConnectWithoutUserInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PersonCreateOrConnectWithoutUserInput
