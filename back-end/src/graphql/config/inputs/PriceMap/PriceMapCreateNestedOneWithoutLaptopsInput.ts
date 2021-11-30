import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PriceMapCreateNestedOneWithoutLaptopsInput: InputTypeConfig<'PriceMapCreateNestedOneWithoutLaptopsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PriceMapCreateNestedOneWithoutLaptopsInput
