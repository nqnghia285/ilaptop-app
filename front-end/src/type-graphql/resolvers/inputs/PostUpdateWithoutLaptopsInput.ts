import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PassageUpdateManyWithoutPostInput } from "../inputs/PassageUpdateManyWithoutPostInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPostInput } from "../inputs/UserUpdateOneRequiredWithoutPostInput";

@TypeGraphQL.InputType("PostUpdateWithoutLaptopsInput", {
  isAbstract: true
})
export class PostUpdateWithoutLaptopsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PassageUpdateManyWithoutPostInput, {
    nullable: true
  })
  passages?: PassageUpdateManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutPostInput | undefined;
}
