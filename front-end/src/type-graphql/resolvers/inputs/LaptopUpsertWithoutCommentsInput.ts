import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateWithoutCommentsInput } from "../inputs/LaptopCreateWithoutCommentsInput";
import { LaptopUpdateWithoutCommentsInput } from "../inputs/LaptopUpdateWithoutCommentsInput";

@TypeGraphQL.InputType("LaptopUpsertWithoutCommentsInput", {
  isAbstract: true
})
export class LaptopUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => LaptopUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: LaptopUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => LaptopCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: LaptopCreateWithoutCommentsInput;
}
