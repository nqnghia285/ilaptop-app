import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'
import {
   IsEmailForUpdateField,
   IsPhoneNumberForUpdateField,
   LengthForUpdateField,
} from '~/graphql/decorators'

const PersonUpdateInput: InputTypeConfig<'PersonUpdateInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
      address: [LengthForUpdateField(0, 255)],
      email: [LengthForUpdateField(11, 30), IsEmailForUpdateField()],
      fullname: [LengthForUpdateField(1, 60)],
      phone: [LengthForUpdateField(10, 20), IsPhoneNumberForUpdateField('VN')],
   },
}

export default PersonUpdateInput
