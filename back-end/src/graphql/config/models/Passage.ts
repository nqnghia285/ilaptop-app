import { ModelConfig } from '@generated/type-graphql'
import { Field } from 'type-graphql'

const Passage: ModelConfig<'Passage'> = {
   fields: {
      postId: [Field({ name: 'post_id' })],
   },
}

export default Passage
