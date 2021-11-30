import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutCommentsInput } from "../inputs/PersonCreateOrConnectWithoutCommentsInput";
import { PersonCreateWithoutCommentsInput } from "../inputs/PersonCreateWithoutCommentsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonCreateNestedOneWithoutCommentsInput", {
  isAbstract: true
})
export class PersonCreateNestedOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: PersonCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;
}
