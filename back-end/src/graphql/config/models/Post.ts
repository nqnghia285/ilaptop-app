import { ModelConfig } from '@generated/type-graphql'
import { Field } from 'type-graphql'

const Post: ModelConfig<'Post'> = {
   fields: {
      userId: [Field({ name: 'user_id' })],
      createdAt: [Field({ name: 'created_at' })],
      updatedAt: [Field({ name: 'updated_at' })],
   },
}

export default Post
