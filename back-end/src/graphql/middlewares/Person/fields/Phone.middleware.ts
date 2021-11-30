import { MiddlewareFn } from 'type-graphql'
import { IContext } from '~/interfaces'

export const PhoneFieldMiddleware: MiddlewareFn<IContext> = async ({}, next) => {
   const phone: string | null | undefined = await next()
   return phone ? phone.trim() : phone
}
