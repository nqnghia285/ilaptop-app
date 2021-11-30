import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumOSFilter } from "../inputs/NestedEnumOSFilter";
import { OS } from "../../enums/OS";

@TypeGraphQL.InputType("EnumOSFilter", {
  isAbstract: true
})
export class EnumOSFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumOSFilter, {
    nullable: true
  })
  not?: NestedEnumOSFilter | undefined;
}
