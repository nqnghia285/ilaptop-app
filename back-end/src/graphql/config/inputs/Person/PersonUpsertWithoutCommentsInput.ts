import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PersonUpsertWithoutCommentsInput: InputTypeConfig<'PersonUpsertWithoutCommentsInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default PersonUpsertWithoutCommentsInput
