import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PersonCreateNestedOneWithoutUserInputConfig: InputTypeConfig<'PersonCreateNestedOneWithoutUserInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PersonCreateNestedOneWithoutUserInputConfig
