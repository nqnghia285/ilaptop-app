import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateManyDiscountInput } from "../inputs/LaptopCreateManyDiscountInput";

@TypeGraphQL.InputType("LaptopCreateManyDiscountInputEnvelope", {
  isAbstract: true
})
export class LaptopCreateManyDiscountInputEnvelope {
  @TypeGraphQL.Field(_type => [LaptopCreateManyDiscountInput], {
    nullable: false
  })
  data!: LaptopCreateManyDiscountInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
