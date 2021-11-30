import { ModelConfig } from '@generated/type-graphql'
import { Field } from 'type-graphql'

const Comment: ModelConfig<'Comment'> = {
   fields: {
      authorId: [Field({ name: 'author_id' })],
      commentId: [Field({ name: 'comment_id' })],
      createdAt: [Field({ name: 'created_at' })],
      isStaff: [Field({ name: 'is_staff' })],
      laptopId: [Field({ name: 'laptop_id' })],
      updatedAt: [Field({ name: 'updated_at' })],
   },
}
export default Comment
