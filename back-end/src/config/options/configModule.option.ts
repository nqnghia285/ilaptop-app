import { ConfigModuleOptions } from '@nestjs/config'
import { database } from '~/config/database.config'
import { system } from '~/config/system.config'
import { validationSchema } from '~/config/schemas'

export const configModuleOptions: ConfigModuleOptions = {
   expandVariables: true,
   cache: true,
   isGlobal: true,
   load: [system, database],
   validationSchema,
   validationOptions: {
      allowUnknown: true,
      abortEarly: false,
   },
}
