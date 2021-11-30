import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PersonCreateOrConnectWithoutCommentsInput: InputTypeConfig<'PersonCreateOrConnectWithoutCommentsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PersonCreateOrConnectWithoutCommentsInput
