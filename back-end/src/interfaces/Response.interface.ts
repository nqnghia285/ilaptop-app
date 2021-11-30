import { IUserInfo } from '~/interfaces'

export interface IResponse {
   isSuccess?: boolean
   message?: string

   profile?: IUserInfo
}
