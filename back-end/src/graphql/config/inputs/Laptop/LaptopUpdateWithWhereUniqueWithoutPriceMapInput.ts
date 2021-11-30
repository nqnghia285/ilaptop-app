import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopUpdateWithWhereUniqueWithoutPriceMapInput: InputTypeConfig<'LaptopUpdateWithWhereUniqueWithoutPriceMapInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopUpdateWithWhereUniqueWithoutPriceMapInput
