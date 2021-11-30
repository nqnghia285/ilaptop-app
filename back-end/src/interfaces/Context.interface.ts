import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { IUserInfo } from '~/interfaces/UserInfo.interface'

export interface IContext {
   req: Request
   res: Response
   user?: IUserInfo
   prisma: PrismaClient
}
