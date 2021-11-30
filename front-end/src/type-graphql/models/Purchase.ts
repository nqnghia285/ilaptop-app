import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Customer } from "../models/Customer";
import { Laptop } from "../models/Laptop";
import { PurchaseCount } from "../resolvers/outputs/PurchaseCount";

@TypeGraphQL.ObjectType("Purchase", {
  isAbstract: true
})
export class Purchase {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  customer?: Customer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  customerId!: string;

  laptops?: Laptop[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => PurchaseCount, {
    nullable: true
  })
  _count?: PurchaseCount | null;
}
