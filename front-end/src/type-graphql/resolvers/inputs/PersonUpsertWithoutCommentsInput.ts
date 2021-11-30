import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutCommentsInput } from "../inputs/PersonCreateWithoutCommentsInput";
import { PersonUpdateWithoutCommentsInput } from "../inputs/PersonUpdateWithoutCommentsInput";

@TypeGraphQL.InputType("PersonUpsertWithoutCommentsInput", {
  isAbstract: true
})
export class PersonUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => PersonUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: PersonUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: PersonCreateWithoutCommentsInput;
}
