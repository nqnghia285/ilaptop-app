import { registerAs } from '@nestjs/config'

export const database = registerAs('database', () => ({
   database: process.env.DATABASE,
   schema: process.env.SCHEMA,
   username: process.env.USER,
   password: parseInt(process.env.PASSWORD, 10),
   dialect: process.env.DIALECT,
   database_port: parseInt(process.env.DATABASE_PORT, 10),
   database_url: process.env.DATABASE_URL,
}))
