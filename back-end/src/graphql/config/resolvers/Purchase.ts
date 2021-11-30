import {
   CreateManyPurchaseArgs,
   CreatePurchaseArgs,
   ResolverActionsConfig,
   Role,
   UpdateManyPurchaseArgs,
   UpdatePurchaseArgs,
} from '@generated/type-graphql'
import { Roles, ValidateInputs } from '~/graphql/decorators'

/**
 * Add middlewares to handle actions of the models
 */
const Purchase: ResolverActionsConfig<'Purchase'> = {
   createPurchase: [ValidateInputs(CreatePurchaseArgs), Roles(Role.ADMIN, Role.STAFF)],
   createManyPurchase: [ValidateInputs(CreateManyPurchaseArgs), Roles(Role.ADMIN, Role.STAFF)],
   updatePurchase: [ValidateInputs(UpdatePurchaseArgs), Roles(Role.ADMIN, Role.STAFF)],
   updateManyPurchase: [ValidateInputs(UpdateManyPurchaseArgs), Roles(Role.ADMIN, Role.STAFF)],
}

export default Purchase
