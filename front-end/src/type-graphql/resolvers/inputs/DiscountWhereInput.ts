import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LaptopListRelationFilter } from "../inputs/LaptopListRelationFilter";

@TypeGraphQL.InputType("DiscountWhereInput", {
  isAbstract: true
})
export class DiscountWhereInput {
  @TypeGraphQL.Field(_type => [DiscountWhereInput], {
    nullable: true
  })
  AND?: DiscountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscountWhereInput], {
    nullable: true
  })
  OR?: DiscountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscountWhereInput], {
    nullable: true
  })
  NOT?: DiscountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  value?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => LaptopListRelationFilter, {
    nullable: true
  })
  laptops?: LaptopListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
