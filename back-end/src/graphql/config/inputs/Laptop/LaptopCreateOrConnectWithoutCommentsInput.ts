import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopCreateOrConnectWithoutCommentsInput: InputTypeConfig<'LaptopCreateOrConnectWithoutCommentsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopCreateOrConnectWithoutCommentsInput
