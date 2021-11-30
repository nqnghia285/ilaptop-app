import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentAvgAggregate } from "../outputs/CommentAvgAggregate";
import { CommentCountAggregate } from "../outputs/CommentCountAggregate";
import { CommentMaxAggregate } from "../outputs/CommentMaxAggregate";
import { CommentMinAggregate } from "../outputs/CommentMinAggregate";
import { CommentSumAggregate } from "../outputs/CommentSumAggregate";
import { Rank } from "../../enums/Rank";

@TypeGraphQL.ObjectType("CommentGroupBy", {
  isAbstract: true
})
export class CommentGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Rank, {
    nullable: false
  })
  rank!: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authorId!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isStaff!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  laptopId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  commentId!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => CommentCountAggregate, {
    nullable: true
  })
  _count!: CommentCountAggregate | null;

  @TypeGraphQL.Field(_type => CommentAvgAggregate, {
    nullable: true
  })
  _avg!: CommentAvgAggregate | null;

  @TypeGraphQL.Field(_type => CommentSumAggregate, {
    nullable: true
  })
  _sum!: CommentSumAggregate | null;

  @TypeGraphQL.Field(_type => CommentMinAggregate, {
    nullable: true
  })
  _min!: CommentMinAggregate | null;

  @TypeGraphQL.Field(_type => CommentMaxAggregate, {
    nullable: true
  })
  _max!: CommentMaxAggregate | null;
}
