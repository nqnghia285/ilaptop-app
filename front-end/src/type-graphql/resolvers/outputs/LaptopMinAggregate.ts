import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OS } from "../../enums/OS";

@TypeGraphQL.ObjectType("LaptopMinAggregate", {
  isAbstract: true
})
export class LaptopMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  brand!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  model!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  material!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  display!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cpu!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ram!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  graphicCard!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ports!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  wifi!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  storage!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  webcam!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fans!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  speakers!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keyboard!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  security!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  adapter!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  specialFeatures!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionsAndWeight!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  releaseDate!: Date | null;

  @TypeGraphQL.Field(_type => OS, {
    nullable: true
  })
  os!: "FREEDOS" | "WINDOWS" | "MACOS" | "LINUX" | "ANDROID" | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  priceMapId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountId!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;
}
