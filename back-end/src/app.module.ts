import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { TypeGraphQLModule } from 'typegraphql-nestjs'
import { RestFullModules } from '~/api/modules'
import { configModuleOptions, serveStaticModuleOptions, typeGraphQLModuleOptions } from '~/config'
import { GraphQLModules } from '~/graphql/modules'
import { GlobalModules } from '~/modules'

@Module({
   imports: [
      ConfigModule.forRoot(configModuleOptions),
      ServeStaticModule.forRootAsync(serveStaticModuleOptions),
      TypeGraphQLModule.forRootAsync(typeGraphQLModuleOptions),
      GlobalModules,
      RestFullModules,
      GraphQLModules,
   ],
})
export class AppModule {}
