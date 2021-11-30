import { CreateManyUserArgs } from '@generated/type-graphql'
import { MiddlewareFn } from 'type-graphql'
import { IContext } from '~/interfaces'
import bcrypt from 'bcrypt'

export const CreateManyUserMiddleware: MiddlewareFn<IContext> = async ({ args }, next) => {
   console.log('CreateManyUserMiddleware')
   const { data } = <CreateManyUserArgs>args
   data.forEach((user) => {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))
   })
   return next()
}
