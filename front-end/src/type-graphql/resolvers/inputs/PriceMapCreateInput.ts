import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateNestedManyWithoutPriceMapInput } from "../inputs/LaptopCreateNestedManyWithoutPriceMapInput";

@TypeGraphQL.InputType("PriceMapCreateInput", {
  isAbstract: true
})
export class PriceMapCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  price?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => LaptopCreateNestedManyWithoutPriceMapInput, {
    nullable: true
  })
  laptops?: LaptopCreateNestedManyWithoutPriceMapInput | undefined;
}
