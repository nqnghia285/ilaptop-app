import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Laptop } from "../models/Laptop";
import { PriceMapCount } from "../resolvers/outputs/PriceMapCount";

@TypeGraphQL.ObjectType("PriceMap", {
  isAbstract: true
})
export class PriceMap {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  price!: number;

  laptops?: Laptop[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => PriceMapCount, {
    nullable: true
  })
  _count?: PriceMapCount | null;
}
