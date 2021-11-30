import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LaptopUpdateManyWithoutPurchasesInput } from "../inputs/LaptopUpdateManyWithoutPurchasesInput";

@TypeGraphQL.InputType("PurchaseUpdateWithoutCustomerInput", {
  isAbstract: true
})
export class PurchaseUpdateWithoutCustomerInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LaptopUpdateManyWithoutPurchasesInput, {
    nullable: true
  })
  laptops?: LaptopUpdateManyWithoutPurchasesInput | undefined;
}
