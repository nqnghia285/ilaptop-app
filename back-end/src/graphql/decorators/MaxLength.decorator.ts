import { buildMessage, maxLength, ValidateBy, ValidationOptions } from 'class-validator'
import { StringFieldUpdateOperationsInput } from '~/interfaces'

export function MaxLengthForUpdateField(max: number, validationOptions?: ValidationOptions) {
   return ValidateBy(
      {
         name: 'maxLength',
         constraints: [max],
         validator: {
            validate: (value: StringFieldUpdateOperationsInput, args) =>
               maxLength(value.set, args.constraints[0]),
            defaultMessage: buildMessage(
               (eachPrefix) =>
                  eachPrefix + '$property must be shorter than or equal to $constraint1 characters',
               validationOptions
            ),
         },
      },
      validationOptions
   )
}
