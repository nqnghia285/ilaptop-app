import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutCommentsInput } from "../inputs/PersonCreateOrConnectWithoutCommentsInput";
import { PersonCreateWithoutCommentsInput } from "../inputs/PersonCreateWithoutCommentsInput";
import { PersonUpdateWithoutCommentsInput } from "../inputs/PersonUpdateWithoutCommentsInput";
import { PersonUpsertWithoutCommentsInput } from "../inputs/PersonUpsertWithoutCommentsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonUpdateOneRequiredWithoutCommentsInput", {
  isAbstract: true
})
export class PersonUpdateOneRequiredWithoutCommentsInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: PersonCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpsertWithoutCommentsInput, {
    nullable: true
  })
  upsert?: PersonUpsertWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateWithoutCommentsInput, {
    nullable: true
  })
  update?: PersonUpdateWithoutCommentsInput | undefined;
}
