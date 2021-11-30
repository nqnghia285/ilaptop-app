import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopUpsertWithoutCommentsInput: InputTypeConfig<'LaptopUpsertWithoutCommentsInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default LaptopUpsertWithoutCommentsInput
