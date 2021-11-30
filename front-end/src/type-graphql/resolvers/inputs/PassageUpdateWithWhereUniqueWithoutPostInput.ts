import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PassageUpdateWithoutPostInput } from "../inputs/PassageUpdateWithoutPostInput";
import { PassageWhereUniqueInput } from "../inputs/PassageWhereUniqueInput";

@TypeGraphQL.InputType("PassageUpdateWithWhereUniqueWithoutPostInput", {
  isAbstract: true
})
export class PassageUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => PassageWhereUniqueInput, {
    nullable: false
  })
  where!: PassageWhereUniqueInput;

  @TypeGraphQL.Field(_type => PassageUpdateWithoutPostInput, {
    nullable: false
  })
  data!: PassageUpdateWithoutPostInput;
}
