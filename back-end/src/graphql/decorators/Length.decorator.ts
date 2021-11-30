import { buildMessage, length, ValidateBy, ValidationOptions } from 'class-validator'
import { StringFieldUpdateOperationsInput } from '~/interfaces'

export function LengthForUpdateField(
   min: number,
   max?: number,
   validationOptions?: ValidationOptions
) {
   return ValidateBy(
      {
         name: 'isLength',
         constraints: [min, max],
         validator: {
            validate: (value: StringFieldUpdateOperationsInput, args) =>
               length(value.set, args.constraints[0], args.constraints[1]),
            defaultMessage: buildMessage((eachPrefix, args) => {
               const isMinLength = args.constraints[0] !== null && args.constraints[0] !== undefined
               const isMaxLength = args.constraints[1] !== null && args.constraints[1] !== undefined
               if (isMinLength && (!args.value || args.value.length < args.constraints[0])) {
                  return (
                     eachPrefix +
                     '$property must be longer than or equal to $constraint1 characters'
                  )
               } else if (isMaxLength && args.value.length > args.constraints[1]) {
                  return (
                     eachPrefix +
                     '$property must be shorter than or equal to $constraint2 characters'
                  )
               }
               return (
                  eachPrefix +
                  '$property must be longer than or equal to $constraint1 and shorter than or equal to $constraint2 characters'
               )
            }, validationOptions),
         },
      },
      validationOptions
   )
}
