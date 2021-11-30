import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseUpdateWithoutLaptopsInput } from "../inputs/PurchaseUpdateWithoutLaptopsInput";
import { PurchaseWhereUniqueInput } from "../inputs/PurchaseWhereUniqueInput";

@TypeGraphQL.InputType("PurchaseUpdateWithWhereUniqueWithoutLaptopsInput", {
  isAbstract: true
})
export class PurchaseUpdateWithWhereUniqueWithoutLaptopsInput {
  @TypeGraphQL.Field(_type => PurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: PurchaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PurchaseUpdateWithoutLaptopsInput, {
    nullable: false
  })
  data!: PurchaseUpdateWithoutLaptopsInput;
}
