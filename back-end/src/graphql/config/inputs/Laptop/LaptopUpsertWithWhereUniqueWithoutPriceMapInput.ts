import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopUpsertWithWhereUniqueWithoutPriceMapInput: InputTypeConfig<'LaptopUpsertWithWhereUniqueWithoutPriceMapInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopUpsertWithWhereUniqueWithoutPriceMapInput
