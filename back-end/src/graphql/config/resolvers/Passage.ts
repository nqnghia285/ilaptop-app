import {
   CreateManyPassageArgs,
   CreatePassageArgs,
   ResolverActionsConfig,
   Role,
   UpdateManyPassageArgs,
   UpdatePassageArgs,
} from '@generated/type-graphql'
import { Roles, ValidateInputs } from '~/graphql/decorators'

/**
 * Add middlewares to handle actions of the models
 */
const Passage: ResolverActionsConfig<'Passage'> = {
   _all: [Roles(Role.ADMIN, Role.STAFF)],
   createPassage: [ValidateInputs(CreatePassageArgs)],
   createManyPassage: [ValidateInputs(CreateManyPassageArgs)],
   updatePassage: [ValidateInputs(UpdatePassageArgs)],
   updateManyPassage: [ValidateInputs(UpdateManyPassageArgs)],
}

export default Passage
