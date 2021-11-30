import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumGenderWithAggregatesFilter } from "../inputs/EnumGenderWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PersonScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PersonScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PersonScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PersonScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PersonScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PersonScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  fullname?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumGenderWithAggregatesFilter, {
    nullable: true
  })
  gender?: EnumGenderWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  phone?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  email?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  address?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
