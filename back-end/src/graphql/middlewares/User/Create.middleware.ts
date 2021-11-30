import { CreateUserArgs } from '@generated/type-graphql'
import bcrypt from 'bcrypt'
import { MiddlewareFn } from 'type-graphql'
import { IContext } from '~/interfaces'

export const CreateUserMiddleware: MiddlewareFn<IContext> = async (resolverData, next) => {
   console.log('CreateUserMiddleware')
   const { args } = resolverData
   const { data } = <CreateUserArgs>args

   data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10))

   return next()
}
