import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OS } from "../../enums/OS";

@TypeGraphQL.InputType("EnumOSFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumOSFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => OS, {
    nullable: true
  })
  set?: "FREEDOS" | "WINDOWS" | "MACOS" | "LINUX" | "ANDROID" | undefined;
}
