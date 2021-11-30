import { applyInputTypesEnhanceMap } from '@generated/type-graphql'
import CommentCreateInput from '~/graphql/config/inputs/Comment/CommentCreateInput'
import CommentCreateManyAuthorInput from '~/graphql/config/inputs/Comment/CommentCreateManyAuthorInput'
import CommentCreateManyAuthorInputEnvelope from '~/graphql/config/inputs/Comment/CommentCreateManyAuthorInputEnvelope'
import CommentCreateManyCommentInput from '~/graphql/config/inputs/Comment/CommentCreateManyCommentInput'
import CommentCreateManyCommentInputEnvelope from '~/graphql/config/inputs/Comment/CommentCreateManyCommentInputEnvelope'
import CommentCreateManyInput from '~/graphql/config/inputs/Comment/CommentCreateManyInput'
import CommentCreateManyLaptopInput from '~/graphql/config/inputs/Comment/CommentCreateManyLaptopInput'
import CommentCreateManyLaptopInputEnvelope from '~/graphql/config/inputs/Comment/CommentCreateManyLaptopInputEnvelope'
import CommentCreateNestedManyWithoutAuthorInput from '~/graphql/config/inputs/Comment/CommentCreateNestedManyWithoutAuthorInput'
import CommentCreateNestedManyWithoutCommentInput from '~/graphql/config/inputs/Comment/CommentCreateNestedManyWithoutCommentInput'
import CommentCreateNestedManyWithoutLaptopInput from '~/graphql/config/inputs/Comment/CommentCreateNestedManyWithoutLaptopInput'
import CommentCreateNestedOneWithoutCommentsInput from '~/graphql/config/inputs/Comment/CommentCreateNestedOneWithoutCommentsInput'
import CommentCreateOrConnectWithoutAuthorInput from '~/graphql/config/inputs/Comment/CommentCreateOrConnectWithoutAuthorInput'
import CommentCreateOrConnectWithoutCommentInput from '~/graphql/config/inputs/Comment/CommentCreateOrConnectWithoutCommentInput'
import CommentCreateOrConnectWithoutCommentsInput from '~/graphql/config/inputs/Comment/CommentCreateOrConnectWithoutCommentsInput'
import CommentCreateOrConnectWithoutLaptopInput from '~/graphql/config/inputs/Comment/CommentCreateOrConnectWithoutLaptopInput'
import CommentCreateWithoutAuthorInput from '~/graphql/config/inputs/Comment/CommentCreateWithoutAuthorInput'
import CommentCreateWithoutCommentInput from '~/graphql/config/inputs/Comment/CommentCreateWithoutCommentInput'
import CommentCreateWithoutCommentsInput from '~/graphql/config/inputs/Comment/CommentCreateWithoutCommentsInput'
import CommentCreateWithoutLaptopInput from '~/graphql/config/inputs/Comment/CommentCreateWithoutLaptopInput'
import CommentUpdateInput from '~/graphql/config/inputs/Comment/CommentUpdateInput'
import CommentUpdateManyMutationInput from '~/graphql/config/inputs/Comment/CommentUpdateManyMutationInput'
import CommentUpdateManyWithWhereWithoutAuthorInput from '~/graphql/config/inputs/Comment/CommentUpdateManyWithWhereWithoutAuthorInput'
import CommentUpdateManyWithWhereWithoutCommentInput from '~/graphql/config/inputs/Comment/CommentUpdateManyWithWhereWithoutCommentInput'
import CommentUpdateManyWithWhereWithoutLaptopInput from '~/graphql/config/inputs/Comment/CommentUpdateManyWithWhereWithoutLaptopInput'
import CommentUpdateManyWithoutAuthorInput from '~/graphql/config/inputs/Comment/CommentUpdateManyWithoutAuthorInput'
import CommentUpdateManyWithoutCommentInput from '~/graphql/config/inputs/Comment/CommentUpdateManyWithoutCommentInput'
import CommentUpdateManyWithoutLaptopInput from '~/graphql/config/inputs/Comment/CommentUpdateManyWithoutLaptopInput'
import CommentUpdateOneWithoutCommentsInput from '~/graphql/config/inputs/Comment/CommentUpdateOneWithoutCommentsInput'
import CommentUpdateWithWhereUniqueWithoutAuthorInput from '~/graphql/config/inputs/Comment/CommentUpdateWithWhereUniqueWithoutAuthorInput'
import CommentUpdateWithWhereUniqueWithoutCommentInput from '~/graphql/config/inputs/Comment/CommentUpdateWithWhereUniqueWithoutCommentInput'
import CommentUpdateWithWhereUniqueWithoutLaptopInput from '~/graphql/config/inputs/Comment/CommentUpdateWithWhereUniqueWithoutLaptopInput'
import CommentUpdateWithoutAuthorInput from '~/graphql/config/inputs/Comment/CommentUpdateWithoutAuthorInput'
import CommentUpdateWithoutCommentInput from '~/graphql/config/inputs/Comment/CommentUpdateWithoutCommentInput'
import CommentUpdateWithoutCommentsInput from '~/graphql/config/inputs/Comment/CommentUpdateWithoutCommentsInput'
import CommentUpdateWithoutLaptopInput from '~/graphql/config/inputs/Comment/CommentUpdateWithoutLaptopInput'
import CommentUpsertWithWhereUniqueWithoutAuthorInput from '~/graphql/config/inputs/Comment/CommentUpsertWithWhereUniqueWithoutAuthorInput'
import CommentUpsertWithWhereUniqueWithoutCommentInput from '~/graphql/config/inputs/Comment/CommentUpsertWithWhereUniqueWithoutCommentInput'
import CommentUpsertWithWhereUniqueWithoutLaptopInput from '~/graphql/config/inputs/Comment/CommentUpsertWithWhereUniqueWithoutLaptopInput'
import CommentUpsertWithoutCommentsInput from '~/graphql/config/inputs/Comment/CommentUpsertWithoutCommentsInput'

export function configCommentInputs() {
   applyInputTypesEnhanceMap({
      CommentCreateInput,
      CommentCreateManyAuthorInput,
      CommentCreateManyAuthorInputEnvelope,
      CommentCreateManyCommentInput,
      CommentCreateManyCommentInputEnvelope,
      CommentCreateManyInput,
      CommentCreateManyLaptopInput,
      CommentCreateManyLaptopInputEnvelope,
      CommentCreateNestedManyWithoutAuthorInput,
      CommentCreateNestedManyWithoutCommentInput,
      CommentCreateNestedManyWithoutLaptopInput,
      CommentCreateNestedOneWithoutCommentsInput,
      CommentCreateOrConnectWithoutAuthorInput,
      CommentCreateOrConnectWithoutCommentInput,
      CommentCreateOrConnectWithoutCommentsInput,
      CommentCreateOrConnectWithoutLaptopInput,
      CommentCreateWithoutAuthorInput,
      CommentCreateWithoutCommentInput,
      CommentCreateWithoutCommentsInput,
      CommentCreateWithoutLaptopInput,
      CommentUpdateInput,
      CommentUpdateManyMutationInput,
      CommentUpdateManyWithWhereWithoutAuthorInput,
      CommentUpdateManyWithWhereWithoutCommentInput,
      CommentUpdateManyWithWhereWithoutLaptopInput,
      CommentUpdateManyWithoutAuthorInput,
      CommentUpdateManyWithoutCommentInput,
      CommentUpdateManyWithoutLaptopInput,
      CommentUpdateOneWithoutCommentsInput,
      CommentUpdateWithWhereUniqueWithoutAuthorInput,
      CommentUpdateWithWhereUniqueWithoutCommentInput,
      CommentUpdateWithWhereUniqueWithoutLaptopInput,
      CommentUpdateWithoutAuthorInput,
      CommentUpdateWithoutCommentInput,
      CommentUpdateWithoutCommentsInput,
      CommentUpdateWithoutLaptopInput,
      CommentUpsertWithWhereUniqueWithoutAuthorInput,
      CommentUpsertWithWhereUniqueWithoutCommentInput,
      CommentUpsertWithWhereUniqueWithoutLaptopInput,
      CommentUpsertWithoutCommentsInput,
   })
}
