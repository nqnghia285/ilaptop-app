import { applyInputTypesEnhanceMap } from '@generated/type-graphql'
import PersonCreateInput from '~/graphql/config/inputs/Person/PersonCreateInput'
import PersonCreateManyInput from '~/graphql/config/inputs/Person/PersonCreateManyInput'
import PersonCreateNestedOneWithoutCommentsInput from '~/graphql/config/inputs/Person/PersonCreateNestedOneWithoutCommentsInput'
import PersonCreateNestedOneWithoutCustomerInput from '~/graphql/config/inputs/Person/PersonCreateNestedOneWithoutCustomerInput'
import PersonCreateNestedOneWithoutUserInput from '~/graphql/config/inputs/Person/PersonCreateNestedOneWithoutUserInput'
import PersonCreateOrConnectWithoutCommentsInput from '~/graphql/config/inputs/Person/PersonCreateOrConnectWithoutCommentsInput'
import PersonCreateOrConnectWithoutCustomerInput from '~/graphql/config/inputs/Person/PersonCreateOrConnectWithoutCustomerInput'
import PersonCreateOrConnectWithoutUserInput from '~/graphql/config/inputs/Person/PersonCreateOrConnectWithoutUserInput'
import PersonCreateWithoutCommentsInput from '~/graphql/config/inputs/Person/PersonCreateWithoutCommentsInput'
import PersonCreateWithoutCustomerInput from '~/graphql/config/inputs/Person/PersonCreateWithoutCustomerInput'
import PersonCreateWithoutUserInput from '~/graphql/config/inputs/Person/PersonCreateWithoutUserInput'
import PersonUpdateInput from '~/graphql/config/inputs/Person/PersonUpdateInput'
import PersonUpdateOneRequiredWithoutCommentsInput from '~/graphql/config/inputs/Person/PersonUpdateOneRequiredWithoutCommentsInput'
import PersonUpdateOneRequiredWithoutCustomerInput from '~/graphql/config/inputs/Person/PersonUpdateOneRequiredWithoutCustomerInput'
import PersonUpdateOneRequiredWithoutUserInput from '~/graphql/config/inputs/Person/PersonUpdateOneRequiredWithoutUserInput'
import PersonUpdateWithoutCommentsInput from '~/graphql/config/inputs/Person/PersonUpdateWithoutCommentsInput'
import PersonUpdateWithoutCustomerInput from '~/graphql/config/inputs/Person/PersonUpdateWithoutCustomerInput'
import PersonUpdateWithoutUserInput from '~/graphql/config/inputs/Person/PersonUpdateWithoutUserInput'
import PersonUpsertWithoutCommentsInput from '~/graphql/config/inputs/Person/PersonUpsertWithoutCommentsInput'
import PersonUpsertWithoutCustomerInput from '~/graphql/config/inputs/Person/PersonUpsertWithoutCustomerInput'
import PersonUpsertWithoutUserInput from '~/graphql/config/inputs/Person/PersonUpsertWithoutUserInput'
import PersonWhereUniqueInput from '~/graphql/config/inputs/Person/PersonWhereUniqueInput'

export function configPersonInputs() {
   applyInputTypesEnhanceMap({
      PersonCreateInput,
      PersonCreateManyInput,
      PersonCreateNestedOneWithoutCommentsInput,
      PersonCreateNestedOneWithoutCustomerInput,
      PersonCreateNestedOneWithoutUserInput,
      PersonCreateOrConnectWithoutCommentsInput,
      PersonCreateOrConnectWithoutCustomerInput,
      PersonCreateOrConnectWithoutUserInput,
      PersonCreateWithoutCommentsInput,
      PersonCreateWithoutCustomerInput,
      PersonCreateWithoutUserInput,
      PersonUpdateInput,
      PersonUpdateOneRequiredWithoutCommentsInput,
      PersonUpdateOneRequiredWithoutCustomerInput,
      PersonUpdateOneRequiredWithoutUserInput,
      PersonUpdateWithoutCommentsInput,
      PersonUpdateWithoutCustomerInput,
      PersonUpdateWithoutUserInput,
      PersonUpsertWithoutCommentsInput,
      PersonUpsertWithoutCustomerInput,
      PersonUpsertWithoutUserInput,
      PersonWhereUniqueInput,
   })
}
