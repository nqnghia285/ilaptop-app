import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopUpdateManyWithoutPostsInput: InputTypeConfig<'LaptopUpdateManyWithoutPostsInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default LaptopUpdateManyWithoutPostsInput
