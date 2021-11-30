import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopUpsertWithWhereUniqueWithoutDiscountInput: InputTypeConfig<'LaptopUpsertWithWhereUniqueWithoutDiscountInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopUpsertWithWhereUniqueWithoutDiscountInput
