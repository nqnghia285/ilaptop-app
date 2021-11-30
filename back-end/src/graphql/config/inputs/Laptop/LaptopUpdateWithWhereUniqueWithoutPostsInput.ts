import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopUpdateWithWhereUniqueWithoutPostsInput: InputTypeConfig<'LaptopUpdateWithWhereUniqueWithoutPostsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopUpdateWithWhereUniqueWithoutPostsInput
