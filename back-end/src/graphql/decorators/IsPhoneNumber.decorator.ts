import { buildMessage, isPhoneNumber, ValidateBy, ValidationOptions } from 'class-validator'
import { CountryCode } from 'libphonenumber-js'
import { StringFieldUpdateOperationsInput } from '~/interfaces'

export function IsPhoneNumberForUpdateField(
   region?: CountryCode,
   validationOptions?: ValidationOptions
) {
   return ValidateBy(
      {
         name: 'isPhoneNumber',
         constraints: [region],
         validator: {
            validate: (value: StringFieldUpdateOperationsInput, args) =>
               isPhoneNumber(value.set, args.constraints[0]),
            defaultMessage: buildMessage(
               (eachPrefix) => eachPrefix + '$property must be a valid phone number',
               validationOptions
            ),
         },
      },
      validationOptions
   )
}
