import { ModelConfig } from '@generated/type-graphql'
import { Field } from 'type-graphql'

const Person: ModelConfig<'Person'> = {
   fields: {
      createdAt: [Field({ name: 'created_at' })],
      updatedAt: [Field({ name: 'updated_at' })],
   },
}

export default Person
