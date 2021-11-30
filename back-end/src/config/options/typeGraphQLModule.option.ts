import {
   ApolloServerPluginLandingPageDisabled,
   ApolloServerPluginLandingPageGraphQLPlayground,
} from 'apollo-server-core'
import { ExpressContext } from 'apollo-server-express'
import { GraphQLResponse } from 'apollo-server-types'
import { join } from 'path'
import { TypeGraphQLRootModuleAsyncOptions } from 'typegraphql-nestjs'
import { NodeEnv } from '~/interfaces'
import { ApiConfigModule } from '~/modules/ApiConfig.module'
import { HandleResolverParams } from '~/plugins'
import { ApiConfigService, prisma } from '~/services'

export const typeGraphQLModuleOptions: TypeGraphQLRootModuleAsyncOptions = {
   imports: [ApiConfigModule],
   inject: [ApiConfigService],
   useFactory: async (config: ApiConfigService) => ({
      debug: config.system.node_env !== NodeEnv.PRODUCTION,
      dateScalarMode: 'timestamp',
      validate: false,
      emitSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      playground: false,
      context: ({ req, res }: ExpressContext) => {
         return { req, res, user: req.user, prisma }
      },
      cors: {
         origin: config.system.origin,
         credentials: true,
         methods: ['GET', 'POST', 'PUT', 'DELETE'],
      },
      path: config.system.graphql_path,
      formatResponse: (response: GraphQLResponse) => {
         // console.log('formatResponse: ', response)
         return response
      },
      plugins: [
         config.system.node_env !== NodeEnv.PRODUCTION
            ? ApolloServerPluginLandingPageGraphQLPlayground()
            : ApolloServerPluginLandingPageDisabled(),
         HandleResolverParams,
      ],
   }),
}
