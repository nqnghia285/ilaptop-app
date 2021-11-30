import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PassageUpdateManyWithWhereWithoutPostInput: InputTypeConfig<'PassageUpdateManyWithWhereWithoutPostInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PassageUpdateManyWithWhereWithoutPostInput
