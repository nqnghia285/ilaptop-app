import { InputTypeConfig } from '@generated/type-graphql'
import { Allow } from 'class-validator'
import { LengthForUpdateField, MinLengthForUpdateField } from '~/graphql/decorators'

const PassageUpdateManyMutationInput: InputTypeConfig<'PassageUpdateManyMutationInput'> = {
   fields: {
      _all: [Allow()],
      header: [LengthForUpdateField(1, 150)],
      content: [MinLengthForUpdateField(1)],
   },
}

export default PassageUpdateManyMutationInput
