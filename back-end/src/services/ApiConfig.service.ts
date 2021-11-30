import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Database, Env, System } from '~/interfaces'

@Injectable()
export class ApiConfigService {
   constructor(private configService: ConfigService) {}

   get system() {
      return this.configService.get<System>(Env.SYSTEM)
   }

   get database() {
      return this.configService.get<Database>(Env.DATABASE)
   }
}
