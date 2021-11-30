import { IsEmail, Length } from 'class-validator'
import { ArgsType, Field } from 'type-graphql'

@ArgsType()
export class LoginArgs {
   @Field()
   @IsEmail()
   @Length(12, 30)
   email: string

   @Field()
   @Length(6, 30)
   password: string
}
