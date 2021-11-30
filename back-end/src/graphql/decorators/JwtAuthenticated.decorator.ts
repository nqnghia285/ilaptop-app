import { verify } from 'jsonwebtoken'
import { createMethodDecorator } from 'type-graphql'
import { IContext, IUserInfo } from '~/interfaces'

export const JwtAuthenticated = createMethodDecorator<IContext>(async ({ context }, next) => {
   const { req } = context

   let token: string | null = null

   if (req.headers.authorization) {
      if (req.headers.authorization.startsWith('Bearer ')) {
         token = req.headers.authorization.split(' ')[1]
      } else {
         token = req.headers.authorization
      }
   } else if (req.cookies && req.cookies[process.env.TOKEN_NAME]) {
      token = req.cookies[process.env.TOKEN_NAME]
   }

   if (token) {
      context.user = <IUserInfo | undefined>(
         verify(token, process.env.JWT_KEY, { algorithms: ['HS256'] })
      )
   }

   console.log('JwtAuthenticated')

   return next()
})
