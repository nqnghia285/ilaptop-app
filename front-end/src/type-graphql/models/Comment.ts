import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Laptop } from "../models/Laptop";
import { Person } from "../models/Person";
import { Rank } from "../enums/Rank";
import { CommentCount } from "../resolvers/outputs/CommentCount";

@TypeGraphQL.ObjectType("Comment", {
  isAbstract: true
})
export class Comment {
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

  author?: Person;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authorId!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isStaff!: boolean;

  laptop?: Laptop;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  laptopId!: number;

  comment?: Comment | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  commentId?: number | null;

  comments?: Comment[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => CommentCount, {
    nullable: true
  })
  _count?: CommentCount | null;
}
