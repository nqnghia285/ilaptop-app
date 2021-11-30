import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Laptop } from "../models/Laptop";
import { DiscountCount } from "../resolvers/outputs/DiscountCount";

@TypeGraphQL.ObjectType("Discount", {
  isAbstract: true
})
export class Discount {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  value!: number;

  laptops?: Laptop[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => DiscountCount, {
    nullable: true
  })
  _count?: DiscountCount | null;
}
