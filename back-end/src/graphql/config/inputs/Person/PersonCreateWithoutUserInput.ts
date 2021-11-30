import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, IsEmail, IsNotEmpty, IsPhoneNumber, Length, ValidateNested } from 'class-validator'

const PersonCreateWithoutUserInputConfig: InputTypeConfig<'PersonCreateWithoutUserInput'> = {
   fields: {
      _all: [Allow()],
      address: [Length(0, 255)],
      email: [Length(11, 30), IsEmail()],
      phone: [Length(10, 20), IsPhoneNumber('VN')],
      fullname: [IsNotEmpty(), Length(1, 60)],
      comments: [ValidateNested()],
      customer: [ValidateNested()],
   },
}

export default PersonCreateWithoutUserInputConfig
