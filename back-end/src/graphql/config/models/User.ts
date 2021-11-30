import { ModelConfig, Role } from '@generated/type-graphql'
import { Allow, IsEnum, IsUUID } from 'class-validator'
import { Field } from 'type-graphql'

const User: ModelConfig<'User'> = {
   fields: {
      _all: [Allow()],
      id: [IsUUID('all', { message: 'Invalid uuid value' })],
      role: [IsEnum(Role, { message: 'Role: ["ADMIN", "STAFF"]' })],
      createdAt: [Field({ name: 'created_at' })],
      updatedAt: [Field({ name: 'updated_at' })],
   },
}

export default User
