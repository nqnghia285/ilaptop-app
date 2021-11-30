import {
   CreateManyPostArgs,
   CreatePostArgs,
   ResolverActionsConfig,
   Role,
   UpdateManyPostArgs,
   UpdatePostArgs,
} from '@generated/type-graphql'
import { Roles, ValidateInputs } from '~/graphql/decorators'

/**
 * Add middlewares to handle actions of the models
 */
const Post: ResolverActionsConfig<'Post'> = {
   createPost: [ValidateInputs(CreatePostArgs), Roles(Role.ADMIN, Role.STAFF)],
   createManyPost: [ValidateInputs(CreateManyPostArgs), Roles(Role.ADMIN, Role.STAFF)],
   updatePost: [ValidateInputs(UpdatePostArgs), Roles(Role.ADMIN, Role.STAFF)],
   updateManyPost: [ValidateInputs(UpdateManyPostArgs), Roles(Role.ADMIN, Role.STAFF)],
}

export default Post
