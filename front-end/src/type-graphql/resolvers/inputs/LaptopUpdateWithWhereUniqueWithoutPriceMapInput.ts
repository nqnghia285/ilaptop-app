import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopUpdateWithoutPriceMapInput } from "../inputs/LaptopUpdateWithoutPriceMapInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopUpdateWithWhereUniqueWithoutPriceMapInput", {
  isAbstract: true
})
export class LaptopUpdateWithWhereUniqueWithoutPriceMapInput {
  @TypeGraphQL.Field(_type => LaptopWhereUniqueInput, {
    nullable: false
  })
  where!: LaptopWhereUniqueInput;

  @TypeGraphQL.Field(_type => LaptopUpdateWithoutPriceMapInput, {
    nullable: false
  })
  data!: LaptopUpdateWithoutPriceMapInput;
}
