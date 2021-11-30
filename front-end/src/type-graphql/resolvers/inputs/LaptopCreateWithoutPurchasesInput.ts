import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutLaptopInput } from "../inputs/CommentCreateNestedManyWithoutLaptopInput";
import { DiscountCreateNestedOneWithoutLaptopsInput } from "../inputs/DiscountCreateNestedOneWithoutLaptopsInput";
import { PostCreateNestedManyWithoutLaptopsInput } from "../inputs/PostCreateNestedManyWithoutLaptopsInput";
import { PriceMapCreateNestedOneWithoutLaptopsInput } from "../inputs/PriceMapCreateNestedOneWithoutLaptopsInput";
import { OS } from "../../enums/OS";

@TypeGraphQL.InputType("LaptopCreateWithoutPurchasesInput", {
  isAbstract: true
})
export class LaptopCreateWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  brand?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  model?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  material?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  display?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cpu?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ram?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  graphicCard?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ports?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  wifi?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  storage?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  webcam?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fans?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  speakers?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keyboard?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  security?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  adapter?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  specialFeatures?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionsAndWeight?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  releaseDate?: Date | undefined;

  @TypeGraphQL.Field(_type => OS, {
    nullable: true
  })
  os?: "FREEDOS" | "WINDOWS" | "MACOS" | "LINUX" | "ANDROID" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PriceMapCreateNestedOneWithoutLaptopsInput, {
    nullable: true
  })
  priceMap?: PriceMapCreateNestedOneWithoutLaptopsInput | undefined;

  @TypeGraphQL.Field(_type => DiscountCreateNestedOneWithoutLaptopsInput, {
    nullable: true
  })
  discount?: DiscountCreateNestedOneWithoutLaptopsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutLaptopsInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutLaptopsInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutLaptopInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutLaptopInput | undefined;
}
