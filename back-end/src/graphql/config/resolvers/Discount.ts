import {
   CreateDiscountArgs,
   CreateManyDiscountArgs,
   ResolverActionsConfig,
   Role,
   UpdateDiscountArgs,
   UpdateManyDiscountArgs,
} from '@generated/type-graphql'
import { Roles, ValidateInputs } from '~/graphql/decorators'

/**
 * Add middlewares to handle actions of the models
 */
const Discount: ResolverActionsConfig<'Discount'> = {
   _all: [Roles(Role.ADMIN, Role.STAFF)],
   createDiscount: [ValidateInputs(CreateDiscountArgs)],
   createManyDiscount: [ValidateInputs(CreateManyDiscountArgs)],
   updateDiscount: [ValidateInputs(UpdateDiscountArgs)],
   updateManyDiscount: [ValidateInputs(UpdateManyDiscountArgs)],
}

export default Discount
