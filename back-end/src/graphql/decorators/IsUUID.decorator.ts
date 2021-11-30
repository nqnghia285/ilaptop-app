import { buildMessage, isUUID, UUIDVersion, ValidateBy, ValidationOptions } from 'class-validator'
import { StringFieldUpdateOperationsInput } from '~/interfaces'

export function IsUUIDForUpdateField(version?: UUIDVersion, validationOptions?: ValidationOptions) {
   return ValidateBy(
      {
         name: 'isUuid',
         constraints: [version],
         validator: {
            validate: (value: StringFieldUpdateOperationsInput, args) =>
               isUUID(value.set, args.constraints[0]),
            defaultMessage: buildMessage(
               (eachPrefix) => eachPrefix + '$property must be a UUID',
               validationOptions
            ),
         },
      },
      validationOptions
   )
}
