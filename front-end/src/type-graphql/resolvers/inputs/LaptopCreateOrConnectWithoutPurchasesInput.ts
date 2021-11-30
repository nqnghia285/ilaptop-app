import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateWithoutPurchasesInput } from "../inputs/LaptopCreateWithoutPurchasesInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopCreateOrConnectWithoutPurchasesInput", {
  isAbstract: true
})
export class LaptopCreateOrConnectWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => LaptopWhereUniqueInput, {
    nullable: false
  })
  where!: LaptopWhereUniqueInput;

  @TypeGraphQL.Field(_type => LaptopCreateWithoutPurchasesInput, {
    nullable: false
  })
  create!: LaptopCreateWithoutPurchasesInput;
}
