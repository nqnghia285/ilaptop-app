import { buildMessage, isEmail, ValidateBy, ValidationOptions } from 'class-validator'
import ValidatorJS from 'validator'
import { StringFieldUpdateOperationsInput } from '~/interfaces'

export function IsEmailForUpdateField(
   options?: ValidatorJS.IsEmailOptions,
   validationOptions?: ValidationOptions
) {
   return ValidateBy(
      {
         name: 'isEmail',
         constraints: [options],
         validator: {
            validate: (value: StringFieldUpdateOperationsInput, args) =>
               isEmail(value.set, args.constraints[0]),
            defaultMessage: buildMessage(
               (eachPrefix) => `[Custom]${eachPrefix}$property must be an email`,
               validationOptions
            ),
         },
      },
      validationOptions
   )
}
