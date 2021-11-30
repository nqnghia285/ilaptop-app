import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const LaptopUpsertWithWhereUniqueWithoutPostsInput: InputTypeConfig<'LaptopUpsertWithWhereUniqueWithoutPostsInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default LaptopUpsertWithWhereUniqueWithoutPostsInput
