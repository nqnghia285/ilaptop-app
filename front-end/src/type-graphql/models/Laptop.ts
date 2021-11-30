import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Comment } from "../models/Comment";
import { Discount } from "../models/Discount";
import { Post } from "../models/Post";
import { PriceMap } from "../models/PriceMap";
import { Purchase } from "../models/Purchase";
import { OS } from "../enums/OS";
import { LaptopCount } from "../resolvers/outputs/LaptopCount";

@TypeGraphQL.ObjectType("Laptop", {
  isAbstract: true
})
export class Laptop {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  brand!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  model!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  material!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  display!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cpu!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ram!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  graphicCard!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ports!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  wifi!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  storage!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  webcam!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  fans!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  speakers!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  keyboard!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  security!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  adapter!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  specialFeatures!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionsAndWeight!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  releaseDate!: Date;

  @TypeGraphQL.Field(_type => OS, {
    nullable: false
  })
  os!: "FREEDOS" | "WINDOWS" | "MACOS" | "LINUX" | "ANDROID";

  priceMap?: PriceMap | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  priceMapId?: number | null;

  discount?: Discount | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountId?: number | null;

  purchases?: Purchase[];

  posts?: Post[];

  comments?: Comment[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => LaptopCount, {
    nullable: true
  })
  _count?: LaptopCount | null;
}
