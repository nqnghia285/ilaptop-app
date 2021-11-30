import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PassageUpdateManyWithoutPostInput: InputTypeConfig<'PassageUpdateManyWithoutPostInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default PassageUpdateManyWithoutPostInput
