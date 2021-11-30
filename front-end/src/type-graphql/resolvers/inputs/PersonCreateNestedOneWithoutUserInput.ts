import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutUserInput } from "../inputs/PersonCreateOrConnectWithoutUserInput";
import { PersonCreateWithoutUserInput } from "../inputs/PersonCreateWithoutUserInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonCreateNestedOneWithoutUserInput", {
  isAbstract: true
})
export class PersonCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutUserInput, {
    nullable: true
  })
  create?: PersonCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;
}
