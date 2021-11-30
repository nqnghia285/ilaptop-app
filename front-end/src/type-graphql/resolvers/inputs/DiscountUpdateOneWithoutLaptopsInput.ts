import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DiscountCreateOrConnectWithoutLaptopsInput } from "../inputs/DiscountCreateOrConnectWithoutLaptopsInput";
import { DiscountCreateWithoutLaptopsInput } from "../inputs/DiscountCreateWithoutLaptopsInput";
import { DiscountUpdateWithoutLaptopsInput } from "../inputs/DiscountUpdateWithoutLaptopsInput";
import { DiscountUpsertWithoutLaptopsInput } from "../inputs/DiscountUpsertWithoutLaptopsInput";
import { DiscountWhereUniqueInput } from "../inputs/DiscountWhereUniqueInput";

@TypeGraphQL.InputType("DiscountUpdateOneWithoutLaptopsInput", {
  isAbstract: true
})
export class DiscountUpdateOneWithoutLaptopsInput {
  @TypeGraphQL.Field(_type => DiscountCreateWithoutLaptopsInput, {
    nullable: true
  })
  create?: DiscountCreateWithoutLaptopsInput | undefined;

  @TypeGraphQL.Field(_type => DiscountCreateOrConnectWithoutLaptopsInput, {
    nullable: true
  })
  connectOrCreate?: DiscountCreateOrConnectWithoutLaptopsInput | undefined;

  @TypeGraphQL.Field(_type => DiscountUpsertWithoutLaptopsInput, {
    nullable: true
  })
  upsert?: DiscountUpsertWithoutLaptopsInput | undefined;

  @TypeGraphQL.Field(_type => DiscountWhereUniqueInput, {
    nullable: true
  })
  connect?: DiscountWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => DiscountUpdateWithoutLaptopsInput, {
    nullable: true
  })
  update?: DiscountUpdateWithoutLaptopsInput | undefined;
}
