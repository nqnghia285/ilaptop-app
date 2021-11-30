import { ClassType, createMethodDecorator } from 'type-graphql'
import { validate } from '~/graphql/decorators'
import { IContext } from '~/interfaces'

export function ValidateInputs(classType: ClassType<object>) {
   return createMethodDecorator<IContext>(async (resolverData, next) => {
      // Validate args
      console.log('ValidateInputs')
      await validate(classType, resolverData, process.env.NODE_ENV !== 'production')
      return next()
   })
}
