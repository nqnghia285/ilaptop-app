import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PassageUpdateWithWhereUniqueWithoutPostInput: InputTypeConfig<'PassageUpdateWithWhereUniqueWithoutPostInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PassageUpdateWithWhereUniqueWithoutPostInput
