import {
   CreateManyUserArgs,
   CreateUserArgs,
   ResolverActionsConfig,
   Role,
   UpdateManyUserArgs,
   UpdateUserArgs,
   UpsertUserArgs,
} from '@generated/type-graphql'
import { UseMiddleware } from 'type-graphql'
import { AuthAndValidateGql, AuthGql } from '~/graphql/decorators'
import {
   CreateManyUserMiddleware,
   CreateUserMiddleware,
   UpdateManyUserMiddleware,
   UpdateUserMiddleware,
   UpsertUserMiddleware,
} from '~/graphql/middlewares'

/**
 * Add middlewares to handle actions of the models
 */
const User: ResolverActionsConfig<'User'> = {
   createUser: [
      UseMiddleware(CreateUserMiddleware),
      AuthAndValidateGql([Role.ADMIN], CreateUserArgs),
   ],
   createManyUser: [
      UseMiddleware(CreateManyUserMiddleware),
      AuthAndValidateGql([Role.ADMIN], CreateManyUserArgs),
   ],
   deleteManyUser: [AuthGql(Role.ADMIN)],
   deleteUser: [AuthGql(Role.ADMIN)],
   updateUser: [
      UseMiddleware(UpdateUserMiddleware),
      AuthAndValidateGql([Role.ADMIN, Role.STAFF], UpdateUserArgs),
   ],
   updateManyUser: [
      UseMiddleware(UpdateManyUserMiddleware),
      AuthAndValidateGql([Role.ADMIN, Role.STAFF], UpdateManyUserArgs),
   ],
   upsertUser: [
      UseMiddleware(UpsertUserMiddleware),
      AuthAndValidateGql([Role.ADMIN], UpsertUserArgs),
   ],
   user: [AuthGql(Role.ADMIN, Role.STAFF)],
   users: [AuthGql(Role.ADMIN, Role.STAFF)],
   aggregateUser: [AuthGql(Role.ADMIN, Role.STAFF)],
   findFirstUser: [AuthGql(Role.ADMIN, Role.STAFF)],
   groupByUser: [AuthGql(Role.ADMIN, Role.STAFF)],
}

export default User
