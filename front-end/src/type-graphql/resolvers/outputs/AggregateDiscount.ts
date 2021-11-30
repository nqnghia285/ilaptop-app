import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DiscountAvgAggregate } from "../outputs/DiscountAvgAggregate";
import { DiscountCountAggregate } from "../outputs/DiscountCountAggregate";
import { DiscountMaxAggregate } from "../outputs/DiscountMaxAggregate";
import { DiscountMinAggregate } from "../outputs/DiscountMinAggregate";
import { DiscountSumAggregate } from "../outputs/DiscountSumAggregate";

@TypeGraphQL.ObjectType("AggregateDiscount", {
  isAbstract: true
})
export class AggregateDiscount {
  @TypeGraphQL.Field(_type => DiscountCountAggregate, {
    nullable: true
  })
  _count!: DiscountCountAggregate | null;

  @TypeGraphQL.Field(_type => DiscountAvgAggregate, {
    nullable: true
  })
  _avg!: DiscountAvgAggregate | null;

  @TypeGraphQL.Field(_type => DiscountSumAggregate, {
    nullable: true
  })
  _sum!: DiscountSumAggregate | null;

  @TypeGraphQL.Field(_type => DiscountMinAggregate, {
    nullable: true
  })
  _min!: DiscountMinAggregate | null;

  @TypeGraphQL.Field(_type => DiscountMaxAggregate, {
    nullable: true
  })
  _max!: DiscountMaxAggregate | null;
}
