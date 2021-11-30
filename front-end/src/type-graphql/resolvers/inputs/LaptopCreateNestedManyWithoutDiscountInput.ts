import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateManyDiscountInputEnvelope } from "../inputs/LaptopCreateManyDiscountInputEnvelope";
import { LaptopCreateOrConnectWithoutDiscountInput } from "../inputs/LaptopCreateOrConnectWithoutDiscountInput";
import { LaptopCreateWithoutDiscountInput } from "../inputs/LaptopCreateWithoutDiscountInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopCreateNestedManyWithoutDiscountInput", {
  isAbstract: true
})
export class LaptopCreateNestedManyWithoutDiscountInput {
  @TypeGraphQL.Field(_type => [LaptopCreateWithoutDiscountInput], {
    nullable: true
  })
  create?: LaptopCreateWithoutDiscountInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopCreateOrConnectWithoutDiscountInput], {
    nullable: true
  })
  connectOrCreate?: LaptopCreateOrConnectWithoutDiscountInput[] | undefined;

  @TypeGraphQL.Field(_type => LaptopCreateManyDiscountInputEnvelope, {
    nullable: true
  })
  createMany?: LaptopCreateManyDiscountInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LaptopWhereUniqueInput], {
    nullable: true
  })
  connect?: LaptopWhereUniqueInput[] | undefined;
}
