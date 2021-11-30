import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateOneRequiredWithoutPurchasesInput } from "../inputs/CustomerUpdateOneRequiredWithoutPurchasesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LaptopUpdateManyWithoutPurchasesInput } from "../inputs/LaptopUpdateManyWithoutPurchasesInput";

@TypeGraphQL.InputType("PurchaseUpdateInput", {
  isAbstract: true
})
export class PurchaseUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateOneRequiredWithoutPurchasesInput, {
    nullable: true
  })
  customer?: CustomerUpdateOneRequiredWithoutPurchasesInput | undefined;

  @TypeGraphQL.Field(_type => LaptopUpdateManyWithoutPurchasesInput, {
    nullable: true
  })
  laptops?: LaptopUpdateManyWithoutPurchasesInput | undefined;
}
