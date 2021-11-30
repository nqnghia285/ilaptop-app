import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PassageCreateNestedManyWithoutPostInput: InputTypeConfig<'PassageCreateNestedManyWithoutPostInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PassageCreateNestedManyWithoutPostInput
