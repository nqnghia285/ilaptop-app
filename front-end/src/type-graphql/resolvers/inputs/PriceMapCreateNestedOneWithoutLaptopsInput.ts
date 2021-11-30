import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriceMapCreateOrConnectWithoutLaptopsInput } from "../inputs/PriceMapCreateOrConnectWithoutLaptopsInput";
import { PriceMapCreateWithoutLaptopsInput } from "../inputs/PriceMapCreateWithoutLaptopsInput";
import { PriceMapWhereUniqueInput } from "../inputs/PriceMapWhereUniqueInput";

@TypeGraphQL.InputType("PriceMapCreateNestedOneWithoutLaptopsInput", {
  isAbstract: true
})
export class PriceMapCreateNestedOneWithoutLaptopsInput {
  @TypeGraphQL.Field(_type => PriceMapCreateWithoutLaptopsInput, {
    nullable: true
  })
  create?: PriceMapCreateWithoutLaptopsInput | undefined;

  @TypeGraphQL.Field(_type => PriceMapCreateOrConnectWithoutLaptopsInput, {
    nullable: true
  })
  connectOrCreate?: PriceMapCreateOrConnectWithoutLaptopsInput | undefined;

  @TypeGraphQL.Field(_type => PriceMapWhereUniqueInput, {
    nullable: true
  })
  connect?: PriceMapWhereUniqueInput | undefined;
}
