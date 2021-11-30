import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopUpdateManyWithWhereWithoutPriceMapInput: InputTypeConfig<'LaptopUpdateManyWithWhereWithoutPriceMapInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopUpdateManyWithWhereWithoutPriceMapInput
