import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateManyPriceMapInputEnvelope } from "../inputs/LaptopCreateManyPriceMapInputEnvelope";
import { LaptopCreateOrConnectWithoutPriceMapInput } from "../inputs/LaptopCreateOrConnectWithoutPriceMapInput";
import { LaptopCreateWithoutPriceMapInput } from "../inputs/LaptopCreateWithoutPriceMapInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopCreateNestedManyWithoutPriceMapInput", {
  isAbstract: true
})
export class LaptopCreateNestedManyWithoutPriceMapInput {
  @TypeGraphQL.Field(_type => [LaptopCreateWithoutPriceMapInput], {
    nullable: true
  })
  create?: LaptopCreateWithoutPriceMapInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopCreateOrConnectWithoutPriceMapInput], {
    nullable: true
  })
  connectOrCreate?: LaptopCreateOrConnectWithoutPriceMapInput[] | undefined;

  @TypeGraphQL.Field(_type => LaptopCreateManyPriceMapInputEnvelope, {
    nullable: true
  })
  createMany?: LaptopCreateManyPriceMapInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LaptopWhereUniqueInput], {
    nullable: true
  })
  connect?: LaptopWhereUniqueInput[] | undefined;
}
