import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriceMapAvgAggregate } from "../outputs/PriceMapAvgAggregate";
import { PriceMapCountAggregate } from "../outputs/PriceMapCountAggregate";
import { PriceMapMaxAggregate } from "../outputs/PriceMapMaxAggregate";
import { PriceMapMinAggregate } from "../outputs/PriceMapMinAggregate";
import { PriceMapSumAggregate } from "../outputs/PriceMapSumAggregate";

@TypeGraphQL.ObjectType("PriceMapGroupBy", {
  isAbstract: true
})
export class PriceMapGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  price!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => PriceMapCountAggregate, {
    nullable: true
  })
  _count!: PriceMapCountAggregate | null;

  @TypeGraphQL.Field(_type => PriceMapAvgAggregate, {
    nullable: true
  })
  _avg!: PriceMapAvgAggregate | null;

  @TypeGraphQL.Field(_type => PriceMapSumAggregate, {
    nullable: true
  })
  _sum!: PriceMapSumAggregate | null;

  @TypeGraphQL.Field(_type => PriceMapMinAggregate, {
    nullable: true
  })
  _min!: PriceMapMinAggregate | null;

  @TypeGraphQL.Field(_type => PriceMapMaxAggregate, {
    nullable: true
  })
  _max!: PriceMapMaxAggregate | null;
}
