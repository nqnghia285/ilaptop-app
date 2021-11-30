import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopUpdateOneRequiredWithoutCommentsInput: InputTypeConfig<'LaptopUpdateOneRequiredWithoutCommentsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopUpdateOneRequiredWithoutCommentsInput
