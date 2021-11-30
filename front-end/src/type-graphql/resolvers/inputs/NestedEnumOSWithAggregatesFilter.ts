import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumOSFilter } from "../inputs/NestedEnumOSFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { OS } from "../../enums/OS";

@TypeGraphQL.InputType("NestedEnumOSWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumOSWithAggregatesFilter {
  @TypeGraphQL.Field(_type => OS, {
    nullable: true
  })
  equals?: "FREEDOS" | "WINDOWS" | "MACOS" | "LINUX" | "ANDROID" | undefined;

  @TypeGraphQL.Field(_type => [OS], {
    nullable: true
  })
  in?: Array<"FREEDOS" | "WINDOWS" | "MACOS" | "LINUX" | "ANDROID"> | undefined;

  @TypeGraphQL.Field(_type => [OS], {
    nullable: true
  })
  notIn?: Array<"FREEDOS" | "WINDOWS" | "MACOS" | "LINUX" | "ANDROID"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumOSWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumOSWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumOSFilter, {
    nullable: true
  })
  _min?: NestedEnumOSFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumOSFilter, {
    nullable: true
  })
  _max?: NestedEnumOSFilter | undefined;
}
