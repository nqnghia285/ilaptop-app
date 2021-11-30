import { MiddlewareFn } from 'type-graphql'
import { Person } from '@generated/type-graphql'

export const Logger: MiddlewareFn = async ({ root, info }, next) => {
   // Before run the resolver

   // Running it
   const resolverResult = await next()

   // After ran the one
   if (info.parentType.name === 'Person' && info.fieldName === 'phone') {
      // Removes white spaces
      ;(<Person>root).phone = (<Person>root).phone.trim()
   }
   console.log(`${info.parentType.name}.${info.fieldName}`)
   console.log('resolverResult#################')
   console.dir(resolverResult, { depth: 6 })
   console.log('root#################')
   console.dir(root, { depth: 6 })

   return resolverResult
}
