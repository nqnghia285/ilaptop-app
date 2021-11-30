import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rank } from "../../enums/Rank";

@TypeGraphQL.InputType("NestedEnumRankFilter", {
  isAbstract: true
})
export class NestedEnumRankFilter {
  @TypeGraphQL.Field(_type => Rank, {
    nullable: true
  })
  equals?: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE" | undefined;

  @TypeGraphQL.Field(_type => [Rank], {
    nullable: true
  })
  in?: Array<"ONE" | "TWO" | "THREE" | "FOUR" | "FIVE"> | undefined;

  @TypeGraphQL.Field(_type => [Rank], {
    nullable: true
  })
  notIn?: Array<"ONE" | "TWO" | "THREE" | "FOUR" | "FIVE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRankFilter, {
    nullable: true
  })
  not?: NestedEnumRankFilter | undefined;
}
