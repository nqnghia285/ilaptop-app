import {
   CreateLaptopArgs,
   CreateManyLaptopArgs,
   ResolverActionsConfig,
   Role,
   UpdateLaptopArgs,
   UpdateManyLaptopArgs,
} from '@generated/type-graphql'
import { AuthAndValidateGql, Roles, ValidateInputs } from '~/graphql/decorators'

/**
 * Add middlewares to handle actions of the models
 */
const Laptop: ResolverActionsConfig<'Laptop'> = {
   createLaptop: [AuthAndValidateGql([Role.ADMIN, Role.STAFF], CreateLaptopArgs)],
   createManyLaptop: [ValidateInputs(CreateManyLaptopArgs), Roles(Role.ADMIN, Role.STAFF)],
   updateLaptop: [ValidateInputs(UpdateLaptopArgs), Roles(Role.ADMIN, Role.STAFF)],
   updateManyLaptop: [ValidateInputs(UpdateManyLaptopArgs), Roles(Role.ADMIN, Role.STAFF)],
}

export default Laptop
