import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateManyWithoutLaptopInput } from "../inputs/CommentUpdateManyWithoutLaptopInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DiscountUpdateOneWithoutLaptopsInput } from "../inputs/DiscountUpdateOneWithoutLaptopsInput";
import { EnumOSFieldUpdateOperationsInput } from "../inputs/EnumOSFieldUpdateOperationsInput";
import { PostUpdateManyWithoutLaptopsInput } from "../inputs/PostUpdateManyWithoutLaptopsInput";
import { PriceMapUpdateOneWithoutLaptopsInput } from "../inputs/PriceMapUpdateOneWithoutLaptopsInput";
import { PurchaseUpdateManyWithoutLaptopsInput } from "../inputs/PurchaseUpdateManyWithoutLaptopsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("LaptopUpdateInput", {
  isAbstract: true
})
export class LaptopUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  brand?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  model?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  material?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  display?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  cpu?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  ram?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  graphicCard?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  ports?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  wifi?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  storage?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  webcam?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  fans?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  speakers?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  keyboard?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  security?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  adapter?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  specialFeatures?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  dimensionsAndWeight?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  releaseDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumOSFieldUpdateOperationsInput, {
    nullable: true
  })
  os?: EnumOSFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PriceMapUpdateOneWithoutLaptopsInput, {
    nullable: true
  })
  priceMap?: PriceMapUpdateOneWithoutLaptopsInput | undefined;

  @TypeGraphQL.Field(_type => DiscountUpdateOneWithoutLaptopsInput, {
    nullable: true
  })
  discount?: DiscountUpdateOneWithoutLaptopsInput | undefined;

  @TypeGraphQL.Field(_type => PurchaseUpdateManyWithoutLaptopsInput, {
    nullable: true
  })
  purchases?: PurchaseUpdateManyWithoutLaptopsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutLaptopsInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutLaptopsInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutLaptopInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutLaptopInput | undefined;
}
