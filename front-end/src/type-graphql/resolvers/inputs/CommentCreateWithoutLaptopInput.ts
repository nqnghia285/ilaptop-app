import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutCommentInput } from "../inputs/CommentCreateNestedManyWithoutCommentInput";
import { CommentCreateNestedOneWithoutCommentsInput } from "../inputs/CommentCreateNestedOneWithoutCommentsInput";
import { PersonCreateNestedOneWithoutCommentsInput } from "../inputs/PersonCreateNestedOneWithoutCommentsInput";
import { Rank } from "../../enums/Rank";

@TypeGraphQL.InputType("CommentCreateWithoutLaptopInput", {
  isAbstract: true
})
export class CommentCreateWithoutLaptopInput {
  @TypeGraphQL.Field(_type => Rank, {
    nullable: true
  })
  rank?: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isStaff?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutCommentsInput, {
    nullable: false
  })
  author!: PersonCreateNestedOneWithoutCommentsInput;

  @TypeGraphQL.Field(_type => CommentCreateNestedOneWithoutCommentsInput, {
    nullable: true
  })
  comment?: CommentCreateNestedOneWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutCommentInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutCommentInput | undefined;
}
