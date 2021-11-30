import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutUserInput } from "../inputs/PersonCreateOrConnectWithoutUserInput";
import { PersonCreateWithoutUserInput } from "../inputs/PersonCreateWithoutUserInput";
import { PersonUpdateWithoutUserInput } from "../inputs/PersonUpdateWithoutUserInput";
import { PersonUpsertWithoutUserInput } from "../inputs/PersonUpsertWithoutUserInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonUpdateOneRequiredWithoutUserInput", {
  isAbstract: true
})
export class PersonUpdateOneRequiredWithoutUserInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutUserInput, {
    nullable: true
  })
  create?: PersonCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: PersonUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateWithoutUserInput, {
    nullable: true
  })
  update?: PersonUpdateWithoutUserInput | undefined;
}
