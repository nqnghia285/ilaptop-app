import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PersonUpsertWithoutUserInput: InputTypeConfig<'PersonUpsertWithoutUserInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default PersonUpsertWithoutUserInput
