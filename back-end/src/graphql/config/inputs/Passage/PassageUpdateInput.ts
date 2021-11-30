import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'
import { LengthForUpdateField, MinLengthForUpdateField } from '~/graphql/decorators'

const PassageUpdateInput: InputTypeConfig<'PassageUpdateInput'> = {
   fields: {
      _all: [Allow()],
      header: [LengthForUpdateField(1, 150)],
      content: [MinLengthForUpdateField(1)],
      Post: [ValidateNested()],
   },
}

export default PassageUpdateInput
