import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DiscountCreateOrConnectWithoutLaptopsInput } from "../inputs/DiscountCreateOrConnectWithoutLaptopsInput";
import { DiscountCreateWithoutLaptopsInput } from "../inputs/DiscountCreateWithoutLaptopsInput";
import { DiscountWhereUniqueInput } from "../inputs/DiscountWhereUniqueInput";

@TypeGraphQL.InputType("DiscountCreateNestedOneWithoutLaptopsInput", {
  isAbstract: true
})
export class DiscountCreateNestedOneWithoutLaptopsInput {
  @TypeGraphQL.Field(_type => DiscountCreateWithoutLaptopsInput, {
    nullable: true
  })
  create?: DiscountCreateWithoutLaptopsInput | undefined;

  @TypeGraphQL.Field(_type => DiscountCreateOrConnectWithoutLaptopsInput, {
    nullable: true
  })
  connectOrCreate?: DiscountCreateOrConnectWithoutLaptopsInput | undefined;

  @TypeGraphQL.Field(_type => DiscountWhereUniqueInput, {
    nullable: true
  })
  connect?: DiscountWhereUniqueInput | undefined;
}
