import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedOneWithoutCommentsInput } from "../inputs/CommentCreateNestedOneWithoutCommentsInput";
import { LaptopCreateNestedOneWithoutCommentsInput } from "../inputs/LaptopCreateNestedOneWithoutCommentsInput";
import { PersonCreateNestedOneWithoutCommentsInput } from "../inputs/PersonCreateNestedOneWithoutCommentsInput";
import { Rank } from "../../enums/Rank";

@TypeGraphQL.InputType("CommentCreateWithoutCommentsInput", {
  isAbstract: true
})
export class CommentCreateWithoutCommentsInput {
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

  @TypeGraphQL.Field(_type => LaptopCreateNestedOneWithoutCommentsInput, {
    nullable: false
  })
  laptop!: LaptopCreateNestedOneWithoutCommentsInput;

  @TypeGraphQL.Field(_type => CommentCreateNestedOneWithoutCommentsInput, {
    nullable: true
  })
  comment?: CommentCreateNestedOneWithoutCommentsInput | undefined;
}
