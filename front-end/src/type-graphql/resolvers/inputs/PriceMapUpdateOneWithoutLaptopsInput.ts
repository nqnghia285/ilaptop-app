import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriceMapCreateOrConnectWithoutLaptopsInput } from "../inputs/PriceMapCreateOrConnectWithoutLaptopsInput";
import { PriceMapCreateWithoutLaptopsInput } from "../inputs/PriceMapCreateWithoutLaptopsInput";
import { PriceMapUpdateWithoutLaptopsInput } from "../inputs/PriceMapUpdateWithoutLaptopsInput";
import { PriceMapUpsertWithoutLaptopsInput } from "../inputs/PriceMapUpsertWithoutLaptopsInput";
import { PriceMapWhereUniqueInput } from "../inputs/PriceMapWhereUniqueInput";

@TypeGraphQL.InputType("PriceMapUpdateOneWithoutLaptopsInput", {
  isAbstract: true
})
export class PriceMapUpdateOneWithoutLaptopsInput {
  @TypeGraphQL.Field(_type => PriceMapCreateWithoutLaptopsInput, {
    nullable: true
  })
  create?: PriceMapCreateWithoutLaptopsInput | undefined;

  @TypeGraphQL.Field(_type => PriceMapCreateOrConnectWithoutLaptopsInput, {
    nullable: true
  })
  connectOrCreate?: PriceMapCreateOrConnectWithoutLaptopsInput | undefined;

  @TypeGraphQL.Field(_type => PriceMapUpsertWithoutLaptopsInput, {
    nullable: true
  })
  upsert?: PriceMapUpsertWithoutLaptopsInput | undefined;

  @TypeGraphQL.Field(_type => PriceMapWhereUniqueInput, {
    nullable: true
  })
  connect?: PriceMapWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => PriceMapUpdateWithoutLaptopsInput, {
    nullable: true
  })
  update?: PriceMapUpdateWithoutLaptopsInput | undefined;
}
