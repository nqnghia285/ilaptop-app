import { ModelConfig } from '@generated/type-graphql'
import { Field } from 'type-graphql'

const Purchase: ModelConfig<'Purchase'> = {
   fields: {
      customerId: [Field({ name: 'customer_id' })],
      createdAt: [Field({ name: 'created_at' })],
      updatedAt: [Field({ name: 'updated_at' })],
   },
}

export default Purchase
