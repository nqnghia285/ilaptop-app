import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

const PostCreateOrConnectWithoutPassagesInput: InputTypeConfig<'PostCreateOrConnectWithoutPassagesInput'> =
   {
      fields: {
         _all: [Allow(), ValidateNested()],
      },
   }

export default PostCreateOrConnectWithoutPassagesInput
