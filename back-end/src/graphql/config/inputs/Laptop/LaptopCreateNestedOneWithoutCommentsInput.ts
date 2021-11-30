import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopCreateNestedOneWithoutCommentsInput: InputTypeConfig<'LaptopCreateNestedOneWithoutCommentsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopCreateNestedOneWithoutCommentsInput
