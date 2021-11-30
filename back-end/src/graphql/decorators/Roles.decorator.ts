import { createMethodDecorator } from 'type-graphql'
import { IContext } from '~/interfaces'

export function Roles(...roles: string[]) {
   return createMethodDecorator<IContext>(async ({ context, info }, next) => {
      const { user } = context
      const isAccess = roles.includes(user?.role)
      const method = info.fieldName

      if (process.env.NODE_ENV !== 'production') {
         if (isAccess) {
            console.log(`Allow access: ${method}`)
         } else {
            console.log(`Don't allow access: ${method}`)
         }
      }

      if (!roles || isAccess) {
         return next()
      }

      throw Error('User authentication failed!')
   })
}
