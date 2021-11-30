import { UpdateUserArgs } from '@generated/type-graphql'
import { MiddlewareFn } from 'type-graphql'
import { IContext } from '~/interfaces'
import bcrypt from 'bcrypt'

export const UpdateUserMiddleware: MiddlewareFn<IContext> = async ({ args }, next) => {
   console.log('UpdateUserMiddleware')
   const { data } = <UpdateUserArgs>args
   data.password = { set: bcrypt.hashSync(data.password.set, bcrypt.genSaltSync(10)) }
   return next()
}
