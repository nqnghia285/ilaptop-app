import { buildMessage, minLength, ValidateBy, ValidationOptions } from 'class-validator'
import { StringFieldUpdateOperationsInput } from '~/interfaces'

export function MinLengthForUpdateField(min: number, validationOptions?: ValidationOptions) {
   return ValidateBy(
      {
         name: 'minLength',
         constraints: [min],
         validator: {
            validate: (value: StringFieldUpdateOperationsInput, args) =>
               minLength(value.set, args.constraints[0]),
            defaultMessage: buildMessage(
               (eachPrefix) =>
                  eachPrefix + '$property must be longer than or equal to $constraint1 characters',
               validationOptions
            ),
         },
      },
      validationOptions
   )
}
