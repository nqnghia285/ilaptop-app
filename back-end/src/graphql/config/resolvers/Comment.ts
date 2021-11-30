import {
   CreateCommentArgs,
   CreateManyCommentArgs,
   ResolverActionsConfig,
   UpdateCommentArgs,
   UpdateManyCommentArgs,
} from '@generated/type-graphql'
import { ValidateInputs } from '~/graphql/decorators'

/**
 * Add middlewares to handle actions of the models
 */
const Comment: ResolverActionsConfig<'Comment'> = {
   createComment: [ValidateInputs(CreateCommentArgs)],
   createManyComment: [ValidateInputs(CreateManyCommentArgs)],
   updateComment: [ValidateInputs(UpdateCommentArgs)],
   updateManyComment: [ValidateInputs(UpdateManyCommentArgs)],
}

export default Comment
