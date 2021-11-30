import {
   ClassType,
   transformAndValidate,
   TransformValidationOptions,
} from 'class-transformer-validator'

export function validateArgs<T extends object>(
   classType: ClassType<T>,
   obj: string | object | object[],
   options: TransformValidationOptions = {
      validator: { enableDebugMessages: true, skipMissingProperties: true },
      transformer: { enableImplicitConversion: true },
   }
) {
   if (obj instanceof String || obj instanceof Object) {
      return transformAndValidate(classType, obj, options)
         .then((o) => o)
         .catch((err) => err)
   }

   return null
}
