import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rank } from "../../enums/Rank";

@TypeGraphQL.InputType("EnumRankFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumRankFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Rank, {
    nullable: true
  })
  set?: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE" | undefined;
}
