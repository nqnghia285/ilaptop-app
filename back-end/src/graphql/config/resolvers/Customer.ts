import {
   CreateCustomerArgs,
   CreateManyCustomerArgs,
   ResolverActionsConfig,
   Role,
   UpdateCustomerArgs,
   UpdateManyCustomerArgs,
} from '@generated/type-graphql'
import { Roles, ValidateInputs } from '~/graphql/decorators'

/**
 * Add middlewares to handle actions of the models
 */
const Customer: ResolverActionsConfig<'Customer'> = {
   _all: [Roles(Role.ADMIN, Role.STAFF)],
   createCustomer: [ValidateInputs(CreateCustomerArgs)],
   createManyCustomer: [ValidateInputs(CreateManyCustomerArgs)],
   updateCustomer: [ValidateInputs(UpdateCustomerArgs)],
   updateManyCustomer: [ValidateInputs(UpdateManyCustomerArgs)],
}

export default Customer
