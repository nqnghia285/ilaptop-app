import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateWithoutPriceMapInput } from "../inputs/LaptopCreateWithoutPriceMapInput";
import { LaptopUpdateWithoutPriceMapInput } from "../inputs/LaptopUpdateWithoutPriceMapInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopUpsertWithWhereUniqueWithoutPriceMapInput", {
  isAbstract: true
})
export class LaptopUpsertWithWhereUniqueWithoutPriceMapInput {
  @TypeGraphQL.Field(_type => LaptopWhereUniqueInput, {
    nullable: false
  })
  where!: LaptopWhereUniqueInput;

  @TypeGraphQL.Field(_type => LaptopUpdateWithoutPriceMapInput, {
    nullable: false
  })
  update!: LaptopUpdateWithoutPriceMapInput;

  @TypeGraphQL.Field(_type => LaptopCreateWithoutPriceMapInput, {
    nullable: false
  })
  create!: LaptopCreateWithoutPriceMapInput;
}
