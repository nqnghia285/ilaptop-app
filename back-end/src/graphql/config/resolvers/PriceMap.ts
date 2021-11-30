import {
   CreateManyPriceMapArgs,
   CreatePriceMapArgs,
   ResolverActionsConfig,
   Role,
   UpdateManyPriceMapArgs,
   UpdatePriceMapArgs,
} from '@generated/type-graphql'
import { Roles, ValidateInputs } from '~/graphql/decorators'

/**
 * Add middlewares to handle actions of the models
 */
const PriceMap: ResolverActionsConfig<'PriceMap'> = {
   createPriceMap: [ValidateInputs(CreatePriceMapArgs), Roles(Role.ADMIN, Role.STAFF)],
   createManyPriceMap: [ValidateInputs(CreateManyPriceMapArgs), Roles(Role.ADMIN, Role.STAFF)],
   updatePriceMap: [ValidateInputs(UpdatePriceMapArgs), Roles(Role.ADMIN, Role.STAFF)],
   updateManyPriceMap: [ValidateInputs(UpdateManyPriceMapArgs), Roles(Role.ADMIN, Role.STAFF)],
}

export default PriceMap
