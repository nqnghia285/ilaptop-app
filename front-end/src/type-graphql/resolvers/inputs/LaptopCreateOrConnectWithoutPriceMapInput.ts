import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateWithoutPriceMapInput } from "../inputs/LaptopCreateWithoutPriceMapInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopCreateOrConnectWithoutPriceMapInput", {
  isAbstract: true
})
export class LaptopCreateOrConnectWithoutPriceMapInput {
  @TypeGraphQL.Field(_type => LaptopWhereUniqueInput, {
    nullable: false
  })
  where!: LaptopWhereUniqueInput;

  @TypeGraphQL.Field(_type => LaptopCreateWithoutPriceMapInput, {
    nullable: false
  })
  create!: LaptopCreateWithoutPriceMapInput;
}
