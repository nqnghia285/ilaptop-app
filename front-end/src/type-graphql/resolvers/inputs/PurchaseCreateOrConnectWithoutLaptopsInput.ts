import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseCreateWithoutLaptopsInput } from "../inputs/PurchaseCreateWithoutLaptopsInput";
import { PurchaseWhereUniqueInput } from "../inputs/PurchaseWhereUniqueInput";

@TypeGraphQL.InputType("PurchaseCreateOrConnectWithoutLaptopsInput", {
  isAbstract: true
})
export class PurchaseCreateOrConnectWithoutLaptopsInput {
  @TypeGraphQL.Field(_type => PurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: PurchaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PurchaseCreateWithoutLaptopsInput, {
    nullable: false
  })
  create!: PurchaseCreateWithoutLaptopsInput;
}
