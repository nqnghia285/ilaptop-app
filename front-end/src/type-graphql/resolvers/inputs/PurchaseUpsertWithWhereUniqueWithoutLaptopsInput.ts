import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseCreateWithoutLaptopsInput } from "../inputs/PurchaseCreateWithoutLaptopsInput";
import { PurchaseUpdateWithoutLaptopsInput } from "../inputs/PurchaseUpdateWithoutLaptopsInput";
import { PurchaseWhereUniqueInput } from "../inputs/PurchaseWhereUniqueInput";

@TypeGraphQL.InputType("PurchaseUpsertWithWhereUniqueWithoutLaptopsInput", {
  isAbstract: true
})
export class PurchaseUpsertWithWhereUniqueWithoutLaptopsInput {
  @TypeGraphQL.Field(_type => PurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: PurchaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PurchaseUpdateWithoutLaptopsInput, {
    nullable: false
  })
  update!: PurchaseUpdateWithoutLaptopsInput;

  @TypeGraphQL.Field(_type => PurchaseCreateWithoutLaptopsInput, {
    nullable: false
  })
  create!: PurchaseCreateWithoutLaptopsInput;
}
