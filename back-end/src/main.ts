import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import cookieParser from 'cookie-parser'
import { address } from 'ip'
import { AppModule } from '~/app.module'
import { configGql } from '~/graphql/config'
import { Env, System } from '~/interfaces'
import { createTemplate } from '~/prisma/data'

async function bootstrap() {
   configGql()

   const app = await NestFactory.create(AppModule)

   const configService = app.get(ConfigService)
   const host = configService.get<System>(Env.SYSTEM).host
   const port = configService.get<System>(Env.SYSTEM).port
   const origin = configService.get<System>(Env.SYSTEM).origin

   app.setGlobalPrefix(configService.get<System>(Env.SYSTEM).api_path)

   app.enableCors({
      origin: origin,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
   })

   app.use(cookieParser())

   await app.listen(port, host, async () => {
      const announcement = {
         url: await app.getUrl(),
         address: address(),
         message: `NestJS Server is running!`,
      }
      console.log(announcement)
   })

   await createTemplate()
}

bootstrap()
