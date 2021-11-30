import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutUserInput } from "../inputs/PersonCreateWithoutUserInput";
import { PersonUpdateWithoutUserInput } from "../inputs/PersonUpdateWithoutUserInput";

@TypeGraphQL.InputType("PersonUpsertWithoutUserInput", {
  isAbstract: true
})
export class PersonUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => PersonUpdateWithoutUserInput, {
    nullable: false
  })
  update!: PersonUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutUserInput, {
    nullable: false
  })
  create!: PersonCreateWithoutUserInput;
}
