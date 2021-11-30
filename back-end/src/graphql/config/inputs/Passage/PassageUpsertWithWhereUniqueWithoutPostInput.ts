import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PassageUpsertWithWhereUniqueWithoutPostInput: InputTypeConfig<'PassageUpsertWithWhereUniqueWithoutPostInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PassageUpsertWithWhereUniqueWithoutPostInput
