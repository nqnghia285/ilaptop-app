import { applyInputTypesEnhanceMap } from '@generated/type-graphql'
import PassageCreateInput from '~/graphql/config/inputs/Passage/PassageCreateInput'
import PassageCreateManyInput from '~/graphql/config/inputs/Passage/PassageCreateManyInput'
import PassageCreateManyPostInput from '~/graphql/config/inputs/Passage/PassageCreateManyPostInput'
import PassageCreateManyPostInputEnvelope from '~/graphql/config/inputs/Passage/PassageCreateManyPostInputEnvelope'
import PassageCreateNestedManyWithoutPostInput from '~/graphql/config/inputs/Passage/PassageCreateNestedManyWithoutPostInput'
import PassageCreateOrConnectWithoutPostInput from '~/graphql/config/inputs/Passage/PassageCreateOrConnectWithoutPostInput'
import PassageCreateWithoutPostInput from '~/graphql/config/inputs/Passage/PassageCreateWithoutPostInput'
import PassageUpdateInput from '~/graphql/config/inputs/Passage/PassageUpdateInput'
import PassageUpdateManyMutationInput from '~/graphql/config/inputs/Passage/PassageUpdateManyMutationInput'
import PassageUpdateManyWithWhereWithoutPostInput from '~/graphql/config/inputs/Passage/PassageUpdateManyWithWhereWithoutPostInput'
import PassageUpdateManyWithoutPostInput from '~/graphql/config/inputs/Passage/PassageUpdateManyWithoutPostInput'
import PassageUpdateWithWhereUniqueWithoutPostInput from '~/graphql/config/inputs/Passage/PassageUpdateWithWhereUniqueWithoutPostInput'
import PassageUpdateWithoutPostInput from '~/graphql/config/inputs/Passage/PassageUpdateWithoutPostInput'
import PassageUpsertWithWhereUniqueWithoutPostInput from '~/graphql/config/inputs/Passage/PassageUpsertWithWhereUniqueWithoutPostInput'

export function configPassageInputs() {
   applyInputTypesEnhanceMap({
      PassageCreateInput,
      PassageCreateManyInput,
      PassageCreateManyPostInput,
      PassageCreateManyPostInputEnvelope,
      PassageCreateNestedManyWithoutPostInput,
      PassageCreateOrConnectWithoutPostInput,
      PassageCreateWithoutPostInput,
      PassageUpdateInput,
      PassageUpdateManyMutationInput,
      PassageUpdateManyWithWhereWithoutPostInput,
      PassageUpdateManyWithoutPostInput,
      PassageUpdateWithWhereUniqueWithoutPostInput,
      PassageUpdateWithoutPostInput,
      PassageUpsertWithWhereUniqueWithoutPostInput,
   })
}
