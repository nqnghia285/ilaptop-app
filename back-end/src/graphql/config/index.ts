import { configArgs } from '~/graphql/config/args'
import { configInputs } from '~/graphql/config/inputs'
import { configModels } from '~/graphql/config/models'
import { configResolvers } from '~/graphql/config/resolvers'

export function configGql() {
   configArgs()
   configInputs()
   configModels()
   configResolvers()
}
