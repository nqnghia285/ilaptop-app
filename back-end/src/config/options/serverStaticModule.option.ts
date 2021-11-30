import { ServeStaticModuleAsyncOptions } from '@nestjs/serve-static'
import { join } from 'path'
import { ApiConfigModule } from '~/modules/ApiConfig.module'
import { ApiConfigService } from '~/services'

export const serveStaticModuleOptions: ServeStaticModuleAsyncOptions = {
   imports: [ApiConfigModule],
   inject: [ApiConfigService],
   useFactory: (config: ApiConfigService) => [
      {
         rootPath: join(process.cwd(), 'public'),
         exclude: [`${config.system.api_path}/*`, config.system.graphql_path],
      },
   ],
}
