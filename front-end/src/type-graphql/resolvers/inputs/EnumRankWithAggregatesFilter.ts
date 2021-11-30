import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumRankFilter } from "../inputs/NestedEnumRankFilter";
import { NestedEnumRankWithAggregatesFilter } from "../inputs/NestedEnumRankWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Rank } from "../../enums/Rank";

@TypeGraphQL.InputType("EnumRankWithAggregatesFilter", {
  isAbstract: true
})
export class EnumRankWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumRankWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumRankWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRankFilter, {
    nullable: true
  })
  _min?: NestedEnumRankFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRankFilter, {
    nullable: true
  })
  _max?: NestedEnumRankFilter | undefined;
}
