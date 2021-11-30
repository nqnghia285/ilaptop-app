import {
   CreateManyPersonArgs,
   CreatePersonArgs,
   ResolverActionsConfig,
   Role,
   UpdateManyPersonArgs,
   UpdatePersonArgs,
} from '@generated/type-graphql'
import { Roles, ValidateInputs } from '~/graphql/decorators'

/**
 * Add middlewares to handle actions of the models
 */
const Person: ResolverActionsConfig<'Person'> = {
   _all: [Roles(Role.ADMIN, Role.STAFF)],
   createPerson: [ValidateInputs(CreatePersonArgs)],
   createManyPerson: [ValidateInputs(CreateManyPersonArgs)],
   updatePerson: [ValidateInputs(UpdatePersonArgs)],
   updateManyPerson: [ValidateInputs(UpdateManyPersonArgs)],
}

export default Person
