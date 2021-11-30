import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, Length, MinLength, ValidateNested } from 'class-validator'

const PassageCreateInput: InputTypeConfig<'PassageCreateInput'> = {
   fields: {
      _all: [Allow()],
      header: [Length(1, 150)],
      content: [MinLength(1)],
      Post: [ValidateNested()],
   },
}

export default PassageCreateInput
