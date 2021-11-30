import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutCommentsInput } from "../inputs/PersonCreateWithoutCommentsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonCreateOrConnectWithoutCommentsInput", {
  isAbstract: true
})
export class PersonCreateOrConnectWithoutCommentsInput {
  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: false
  })
  where!: PersonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: PersonCreateWithoutCommentsInput;
}
