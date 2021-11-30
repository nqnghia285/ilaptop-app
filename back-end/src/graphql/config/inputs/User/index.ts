import { applyInputTypesEnhanceMap } from '@generated/type-graphql'
import UserCreateInput from '~/graphql/config/inputs/User/UserCreateInput'
import UserCreateManyInput from '~/graphql/config/inputs/User/UserCreateManyInput'
import UserCreateNestedOneWithoutPostsInput from '~/graphql/config/inputs/User/UserCreateNestedOneWithoutPostsInput'
import UserCreateNestedOneWithoutProfileInput from '~/graphql/config/inputs/User/UserCreateNestedOneWithoutProfileInput'
import UserCreateOrConnectWithoutPostsInput from '~/graphql/config/inputs/User/UserCreateOrConnectWithoutPostsInput'
import UserCreateOrConnectWithoutProfileInput from '~/graphql/config/inputs/User/UserCreateOrConnectWithoutProfileInput'
import UserCreateWithoutPostsInput from '~/graphql/config/inputs/User/UserCreateWithoutPostsInput'
import UserCreateWithoutProfileInput from '~/graphql/config/inputs/User/UserCreateWithoutProfileInput'
import UserUpdateInput from '~/graphql/config/inputs/User/UserUpdateInput'
import UserUpdateOneRequiredWithoutPostsInput from '~/graphql/config/inputs/User/UserUpdateOneRequiredWithoutPostsInput'
import UserUpdateOneWithoutProfileInput from '~/graphql/config/inputs/User/UserUpdateOneWithoutProfileInput'
import UserUpdateWithoutPostsInput from '~/graphql/config/inputs/User/UserUpdateWithoutPostsInput'
import UserUpdateWithoutProfileInput from '~/graphql/config/inputs/User/UserUpdateWithoutProfileInput'
import UserUpsertWithoutPostsInput from '~/graphql/config/inputs/User/UserUpsertWithoutPostsInput'
import UserUpsertWithoutProfileInput from '~/graphql/config/inputs/User/UserUpsertWithoutProfileInput'

export function configUserInputs() {
   applyInputTypesEnhanceMap({
      UserCreateInput,
      UserCreateManyInput,
      UserCreateNestedOneWithoutPostsInput,
      UserCreateNestedOneWithoutProfileInput,
      UserCreateOrConnectWithoutPostsInput,
      UserCreateOrConnectWithoutProfileInput,
      UserCreateWithoutPostsInput,
      UserCreateWithoutProfileInput,
      UserUpdateInput,
      UserUpdateOneRequiredWithoutPostsInput,
      UserUpdateOneWithoutProfileInput,
      UserUpdateWithoutPostsInput,
      UserUpdateWithoutProfileInput,
      UserUpsertWithoutPostsInput,
      UserUpsertWithoutProfileInput,
   })
}
