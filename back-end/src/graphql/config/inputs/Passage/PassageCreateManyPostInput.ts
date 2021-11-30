import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length, MinLength } from 'class-validator'

const PassageCreateManyPostInput: InputTypeConfig<'PassageCreateManyPostInput'> = {
   fields: {
      _all: [Allow()],
      header: [Length(1, 150)],
      content: [MinLength(1)],
   },
}

export default PassageCreateManyPostInput
