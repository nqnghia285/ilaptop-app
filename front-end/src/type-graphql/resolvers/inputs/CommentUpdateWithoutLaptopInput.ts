import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CommentUpdateManyWithoutCommentInput } from "../inputs/CommentUpdateManyWithoutCommentInput";
import { CommentUpdateOneWithoutCommentsInput } from "../inputs/CommentUpdateOneWithoutCommentsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRankFieldUpdateOperationsInput } from "../inputs/EnumRankFieldUpdateOperationsInput";
import { PersonUpdateOneRequiredWithoutCommentsInput } from "../inputs/PersonUpdateOneRequiredWithoutCommentsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CommentUpdateWithoutLaptopInput", {
  isAbstract: true
})
export class CommentUpdateWithoutLaptopInput {
  @TypeGraphQL.Field(_type => EnumRankFieldUpdateOperationsInput, {
    nullable: true
  })
  rank?: EnumRankFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isStaff?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateOneRequiredWithoutCommentsInput, {
    nullable: true
  })
  author?: PersonUpdateOneRequiredWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateOneWithoutCommentsInput, {
    nullable: true
  })
  comment?: CommentUpdateOneWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutCommentInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutCommentInput | undefined;
}
