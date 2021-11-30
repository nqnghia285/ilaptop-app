import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopAvgAggregate } from "../outputs/LaptopAvgAggregate";
import { LaptopCountAggregate } from "../outputs/LaptopCountAggregate";
import { LaptopMaxAggregate } from "../outputs/LaptopMaxAggregate";
import { LaptopMinAggregate } from "../outputs/LaptopMinAggregate";
import { LaptopSumAggregate } from "../outputs/LaptopSumAggregate";

@TypeGraphQL.ObjectType("AggregateLaptop", {
  isAbstract: true
})
export class AggregateLaptop {
  @TypeGraphQL.Field(_type => LaptopCountAggregate, {
    nullable: true
  })
  _count!: LaptopCountAggregate | null;

  @TypeGraphQL.Field(_type => LaptopAvgAggregate, {
    nullable: true
  })
  _avg!: LaptopAvgAggregate | null;

  @TypeGraphQL.Field(_type => LaptopSumAggregate, {
    nullable: true
  })
  _sum!: LaptopSumAggregate | null;

  @TypeGraphQL.Field(_type => LaptopMinAggregate, {
    nullable: true
  })
  _min!: LaptopMinAggregate | null;

  @TypeGraphQL.Field(_type => LaptopMaxAggregate, {
    nullable: true
  })
  _max!: LaptopMaxAggregate | null;
}
