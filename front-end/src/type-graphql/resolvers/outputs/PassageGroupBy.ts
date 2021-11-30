import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PassageAvgAggregate } from "../outputs/PassageAvgAggregate";
import { PassageCountAggregate } from "../outputs/PassageCountAggregate";
import { PassageMaxAggregate } from "../outputs/PassageMaxAggregate";
import { PassageMinAggregate } from "../outputs/PassageMinAggregate";
import { PassageSumAggregate } from "../outputs/PassageSumAggregate";

@TypeGraphQL.ObjectType("PassageGroupBy", {
  isAbstract: true
})
export class PassageGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  header!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  postId!: number;

  @TypeGraphQL.Field(_type => PassageCountAggregate, {
    nullable: true
  })
  _count!: PassageCountAggregate | null;

  @TypeGraphQL.Field(_type => PassageAvgAggregate, {
    nullable: true
  })
  _avg!: PassageAvgAggregate | null;

  @TypeGraphQL.Field(_type => PassageSumAggregate, {
    nullable: true
  })
  _sum!: PassageSumAggregate | null;

  @TypeGraphQL.Field(_type => PassageMinAggregate, {
    nullable: true
  })
  _min!: PassageMinAggregate | null;

  @TypeGraphQL.Field(_type => PassageMaxAggregate, {
    nullable: true
  })
  _max!: PassageMaxAggregate | null;
}
