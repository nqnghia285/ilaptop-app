import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PassageCreateManyPostInputEnvelope: InputTypeConfig<'PassageCreateManyPostInputEnvelope'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
   },
}

export default PassageCreateManyPostInputEnvelope
