import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopCreateOrConnectWithoutPostsInput: InputTypeConfig<'LaptopCreateOrConnectWithoutPostsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopCreateOrConnectWithoutPostsInput
