import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseCreateOrConnectWithoutLaptopsInput } from "../inputs/PurchaseCreateOrConnectWithoutLaptopsInput";
import { PurchaseCreateWithoutLaptopsInput } from "../inputs/PurchaseCreateWithoutLaptopsInput";
import { PurchaseWhereUniqueInput } from "../inputs/PurchaseWhereUniqueInput";

@TypeGraphQL.InputType("PurchaseCreateNestedManyWithoutLaptopsInput", {
  isAbstract: true
})
export class PurchaseCreateNestedManyWithoutLaptopsInput {
  @TypeGraphQL.Field(_type => [PurchaseCreateWithoutLaptopsInput], {
    nullable: true
  })
  create?: PurchaseCreateWithoutLaptopsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseCreateOrConnectWithoutLaptopsInput], {
    nullable: true
  })
  connectOrCreate?: PurchaseCreateOrConnectWithoutLaptopsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseWhereUniqueInput], {
    nullable: true
  })
  connect?: PurchaseWhereUniqueInput[] | undefined;
}
