import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PersonUpdateOneRequiredWithoutCustomerInput } from "../inputs/PersonUpdateOneRequiredWithoutCustomerInput";

@TypeGraphQL.InputType("CustomerUpdateWithoutPurchasesInput", {
  isAbstract: true
})
export class CustomerUpdateWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateOneRequiredWithoutCustomerInput, {
    nullable: true
  })
  profile?: PersonUpdateOneRequiredWithoutCustomerInput | undefined;
}
