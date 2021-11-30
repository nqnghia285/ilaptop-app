import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, IsEmail, IsPhoneNumber, Length, ValidateNested } from 'class-validator'

const PersonCreateWithoutCommentsInput: InputTypeConfig<'PersonCreateWithoutCommentsInput'> = {
   fields: {
      _all: [Allow()],
      address: [Length(1, 255)],
      email: [Length(11, 30), IsEmail()],
      phone: [Length(10, 20), IsPhoneNumber('VN')],
      fullname: [Length(1, 60)],
      customer: [ValidateNested()],
      user: [ValidateNested()],
   },
}

export default PersonCreateWithoutCommentsInput
