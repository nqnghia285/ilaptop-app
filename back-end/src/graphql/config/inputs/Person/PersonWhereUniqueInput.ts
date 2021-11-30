import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, IsUUID } from 'class-validator'
import {
   IsEmailForUpdateField,
   IsPhoneNumberForUpdateField,
   LengthForUpdateField,
} from '~/graphql/decorators'

const PersonWhereUniqueInput: InputTypeConfig<'PersonWhereUniqueInput'> = {
   fields: {
      _all: [Allow()],
      id: [IsUUID()],
      email: [LengthForUpdateField(11, 30), IsEmailForUpdateField()],
      phone: [LengthForUpdateField(10, 20), IsPhoneNumberForUpdateField('VN')],
   },
}

export default PersonWhereUniqueInput
