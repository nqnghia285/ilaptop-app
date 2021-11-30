import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerRelationFilter } from "../inputs/CustomerRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LaptopListRelationFilter } from "../inputs/LaptopListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PurchaseWhereInput", {
  isAbstract: true
})
export class PurchaseWhereInput {
  @TypeGraphQL.Field(_type => [PurchaseWhereInput], {
    nullable: true
  })
  AND?: PurchaseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseWhereInput], {
    nullable: true
  })
  OR?: PurchaseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseWhereInput], {
    nullable: true
  })
  NOT?: PurchaseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => CustomerRelationFilter, {
    nullable: true
  })
  customer?: CustomerRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  customerId?: StringFilter | undefined;

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
