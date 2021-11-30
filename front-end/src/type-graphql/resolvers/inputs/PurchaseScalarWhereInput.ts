import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PurchaseScalarWhereInput", {
  isAbstract: true
})
export class PurchaseScalarWhereInput {
  @TypeGraphQL.Field(_type => [PurchaseScalarWhereInput], {
    nullable: true
  })
  AND?: PurchaseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseScalarWhereInput], {
    nullable: true
  })
  OR?: PurchaseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseScalarWhereInput], {
    nullable: true
  })
  NOT?: PurchaseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  customerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
