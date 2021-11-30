import { buildMessage, isDate, ValidateBy, ValidationOptions } from 'class-validator'
import { StringFieldUpdateOperationsInput } from '~/interfaces'

export function IsDateForUpdateField(validationOptions?: ValidationOptions) {
   return ValidateBy(
      {
         name: 'isDate',
         validator: {
            validate: (value: StringFieldUpdateOperationsInput) => isDate(value.set),
            defaultMessage: buildMessage(
               (eachPrefix) => eachPrefix + '$property must be a Date instance',
               validationOptions
            ),
         },
      },
      validationOptions
   )
}
