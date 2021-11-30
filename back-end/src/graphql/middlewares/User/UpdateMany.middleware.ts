import { UpdateManyUserArgs } from '@generated/type-graphql'
import { MiddlewareFn } from 'type-graphql'
import { IContext } from '~/interfaces'
import bcrypt from 'bcrypt'

export const UpdateManyUserMiddleware: MiddlewareFn<IContext> = async ({ args }, next) => {
   console.log('UpdateManyUserMiddleware')
   const { data } = <UpdateManyUserArgs>args
   data.password = { set: bcrypt.hashSync(data.password.set, bcrypt.genSaltSync(10)) }
   return next()
}
