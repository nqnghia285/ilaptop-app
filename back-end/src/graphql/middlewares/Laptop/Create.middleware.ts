import { MiddlewareFn } from 'type-graphql'
import { IContext } from '~/interfaces'

export const CreateLaptopMiddleware: MiddlewareFn<IContext> = async (resolverData, next) => {
   console.log('CreateLaptopMiddleware')
   return next()
}
