import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PersonUpdateOneRequiredWithoutCustomerInput } from "../inputs/PersonUpdateOneRequiredWithoutCustomerInput";
import { PurchaseUpdateManyWithoutCustomerInput } from "../inputs/PurchaseUpdateManyWithoutCustomerInput";

@TypeGraphQL.InputType("CustomerUpdateInput", {
  isAbstract: true
})
export class CustomerUpdateInput {
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

  @TypeGraphQL.Field(_type => PurchaseUpdateManyWithoutCustomerInput, {
    nullable: true
  })
  purchases?: PurchaseUpdateManyWithoutCustomerInput | undefined;
}
