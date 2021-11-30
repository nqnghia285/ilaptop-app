import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopCreateNestedManyWithoutPostsInput: InputTypeConfig<'LaptopCreateNestedManyWithoutPostsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopCreateNestedManyWithoutPostsInput
