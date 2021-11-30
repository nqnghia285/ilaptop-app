export interface Database {
   database: string
   schema: string
   username: string
   password: number
   dialect: 'postgresql' | 'mysql'
   database_port: number
   database_url: string
}
