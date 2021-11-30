import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopUpdateManyWithWhereWithoutPostsInput: InputTypeConfig<'LaptopUpdateManyWithWhereWithoutPostsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopUpdateManyWithWhereWithoutPostsInput
