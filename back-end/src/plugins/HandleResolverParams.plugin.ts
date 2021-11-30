import { PluginDefinition } from 'apollo-server-core'
import { BaseContext, GraphQLFieldResolverParams } from 'apollo-server-plugin-base'

export type ResolverParams = GraphQLFieldResolverParams<
   any,
   BaseContext,
   { [argName: string]: any }
>

export const HandleResolverParams: PluginDefinition = {
   async requestDidStart() {
      return {
         async executionDidStart() {
            return {
               // eslint-disable-next-line @typescript-eslint/no-unused-vars
               willResolveField(fieldResolverParams: ResolverParams) {
                  return () => {
                     // console.log('Context in willResolveField: ', fieldResolverParams.context)
                  }
               },
            }
         },
      }
   },
}
