import { UpsertUserArgs } from '@generated/type-graphql'
import { MiddlewareFn } from 'type-graphql'
import { IContext } from '~/interfaces'
import bcrypt from 'bcrypt'

export const UpsertUserMiddleware: MiddlewareFn<IContext> = async ({ args }, next) => {
   console.log('UpsertUserMiddleware')
   const { create, update } = <UpsertUserArgs>args
   create.password = bcrypt.hashSync(create.password, bcrypt.genSaltSync(10))
   update.password = { set: bcrypt.hashSync(update.password.set, bcrypt.genSaltSync(10)) }
   return next()
}
