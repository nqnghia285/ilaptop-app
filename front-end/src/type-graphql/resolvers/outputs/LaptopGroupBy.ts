import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopAvgAggregate } from "../outputs/LaptopAvgAggregate";
import { LaptopCountAggregate } from "../outputs/LaptopCountAggregate";
import { LaptopMaxAggregate } from "../outputs/LaptopMaxAggregate";
import { LaptopMinAggregate } from "../outputs/LaptopMinAggregate";
import { LaptopSumAggregate } from "../outputs/LaptopSumAggregate";
import { OS } from "../../enums/OS";

@TypeGraphQL.ObjectType("LaptopGroupBy", {
  isAbstract: true
})
export class LaptopGroupBy {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  priceMapId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountId!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
