import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonOrderByWithRelationInput } from "../inputs/PersonOrderByWithRelationInput";
import { PurchaseOrderByRelationAggregateInput } from "../inputs/PurchaseOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CustomerOrderByWithRelationInput", {
  isAbstract: true
})
export class CustomerOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PersonOrderByWithRelationInput, {
    nullable: true
  })
  profile?: PersonOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PurchaseOrderByRelationAggregateInput, {
    nullable: true
  })
  purchases?: PurchaseOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;
}
