import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { LaptopUpdateManyWithoutPriceMapInput } from "../inputs/LaptopUpdateManyWithoutPriceMapInput";

@TypeGraphQL.InputType("PriceMapUpdateInput", {
  isAbstract: true
})
export class PriceMapUpdateInput {
  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LaptopUpdateManyWithoutPriceMapInput, {
    nullable: true
  })
  laptops?: LaptopUpdateManyWithoutPriceMapInput | undefined;
}
