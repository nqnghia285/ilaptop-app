import { applyInputTypesEnhanceMap } from '@generated/type-graphql'
import PostCreateInput from '~/graphql/config/inputs/Post/PostCreateInput'
import PostCreateManyAuthorInput from '~/graphql/config/inputs/Post/PostCreateManyAuthorInput'
import PostCreateManyAuthorInputEnvelope from '~/graphql/config/inputs/Post/PostCreateManyAuthorInputEnvelope'
import PostCreateManyInput from '~/graphql/config/inputs/Post/PostCreateManyInput'
import PostCreateNestedManyWithoutAuthorInput from '~/graphql/config/inputs/Post/PostCreateNestedManyWithoutAuthorInput'
import PostCreateNestedManyWithoutLaptopsInput from '~/graphql/config/inputs/Post/PostCreateNestedManyWithoutLaptopsInput'
import PostCreateNestedOneWithoutPassagesInput from '~/graphql/config/inputs/Post/PostCreateNestedOneWithoutPassagesInput'
import PostCreateOrConnectWithoutAuthorInput from '~/graphql/config/inputs/Post/PostCreateOrConnectWithoutAuthorInput'
import PostCreateOrConnectWithoutLaptopsInput from '~/graphql/config/inputs/Post/PostCreateOrConnectWithoutLaptopsInput'
import PostCreateOrConnectWithoutPassagesInput from '~/graphql/config/inputs/Post/PostCreateOrConnectWithoutPassagesInput'
import PostCreateWithoutAuthorInput from '~/graphql/config/inputs/Post/PostCreateWithoutAuthorInput'
import PostCreateWithoutLaptopsInput from '~/graphql/config/inputs/Post/PostCreateWithoutLaptopsInput'
import PostCreateWithoutPassagesInput from '~/graphql/config/inputs/Post/PostCreateWithoutPassagesInput'
import PostUpdateInput from '~/graphql/config/inputs/Post/PostUpdateInput'
import PostUpdateManyWithWhereWithoutAuthorInput from '~/graphql/config/inputs/Post/PostUpdateManyWithWhereWithoutAuthorInput'
import PostUpdateManyWithWhereWithoutLaptopsInput from '~/graphql/config/inputs/Post/PostUpdateManyWithWhereWithoutLaptopsInput'
import PostUpdateManyWithoutAuthorInput from '~/graphql/config/inputs/Post/PostUpdateManyWithoutAuthorInput'
import PostUpdateManyWithoutLaptopsInput from '~/graphql/config/inputs/Post/PostUpdateManyWithoutLaptopsInput'
import PostUpdateOneRequiredWithoutPassagesInput from '~/graphql/config/inputs/Post/PostUpdateOneRequiredWithoutPassagesInput'
import PostUpdateWithWhereUniqueWithoutAuthorInput from '~/graphql/config/inputs/Post/PostUpdateWithWhereUniqueWithoutAuthorInput'
import PostUpdateWithWhereUniqueWithoutLaptopsInput from '~/graphql/config/inputs/Post/PostUpdateWithWhereUniqueWithoutLaptopsInput'
import PostUpdateWithoutAuthorInput from '~/graphql/config/inputs/Post/PostUpdateWithoutAuthorInput'
import PostUpdateWithoutLaptopsInput from '~/graphql/config/inputs/Post/PostUpdateWithoutLaptopsInput'
import PostUpdateWithoutPassagesInput from '~/graphql/config/inputs/Post/PostUpdateWithoutPassagesInput'
import PostUpsertWithWhereUniqueWithoutAuthorInput from '~/graphql/config/inputs/Post/PostUpsertWithWhereUniqueWithoutAuthorInput'
import PostUpsertWithWhereUniqueWithoutLaptopsInput from '~/graphql/config/inputs/Post/PostUpsertWithWhereUniqueWithoutLaptopsInput'
import PostUpsertWithoutPassagesInput from '~/graphql/config/inputs/Post/PostUpsertWithoutPassagesInput'

export function configPostInputs() {
   applyInputTypesEnhanceMap({
      PostCreateInput,
      PostCreateManyAuthorInput,
      PostCreateManyAuthorInputEnvelope,
      PostCreateManyInput,
      PostCreateNestedManyWithoutAuthorInput,
      PostCreateNestedManyWithoutLaptopsInput,
      PostCreateNestedOneWithoutPassagesInput,
      PostCreateOrConnectWithoutAuthorInput,
      PostCreateOrConnectWithoutLaptopsInput,
      PostCreateOrConnectWithoutPassagesInput,
      PostCreateWithoutAuthorInput,
      PostCreateWithoutLaptopsInput,
      PostCreateWithoutPassagesInput,
      PostUpdateInput,
      PostUpdateManyWithWhereWithoutAuthorInput,
      PostUpdateManyWithWhereWithoutLaptopsInput,
      PostUpdateManyWithoutAuthorInput,
      PostUpdateManyWithoutLaptopsInput,
      PostUpdateOneRequiredWithoutPassagesInput,
      PostUpdateWithWhereUniqueWithoutAuthorInput,
      PostUpdateWithWhereUniqueWithoutLaptopsInput,
      PostUpdateWithoutAuthorInput,
      PostUpdateWithoutLaptopsInput,
      PostUpdateWithoutPassagesInput,
      PostUpsertWithWhereUniqueWithoutAuthorInput,
      PostUpsertWithWhereUniqueWithoutLaptopsInput,
      PostUpsertWithoutPassagesInput,
   })
}
