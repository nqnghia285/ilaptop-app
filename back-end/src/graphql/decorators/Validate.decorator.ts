import { ClassType } from 'class-transformer-validator'
import { GraphQLError } from 'graphql'
import { ResolverData } from 'type-graphql'
import { validateArgs } from '~/graphql/decorators'

export async function validate<T = object>(
   classType: ClassType<object>,
   resolverData: ResolverData<T>,
   logErrors = false
) {
   const { root, args, info } = resolverData
   const errors = await validateArgs(classType, args)
   if (errors && !(errors instanceof classType) && errors.length > 0) {
      if (logErrors) {
         console.error(errors)
      }

      throw new GraphQLError(
         errors.toString(),
         [],
         root,
         [],
         [],
         { name: info.parentType.name, message: info.fieldName },
         errors
      )
   }
}
