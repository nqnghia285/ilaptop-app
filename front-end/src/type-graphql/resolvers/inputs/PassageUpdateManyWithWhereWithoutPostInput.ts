import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PassageScalarWhereInput } from "../inputs/PassageScalarWhereInput";
import { PassageUpdateManyMutationInput } from "../inputs/PassageUpdateManyMutationInput";

@TypeGraphQL.InputType("PassageUpdateManyWithWhereWithoutPostInput", {
  isAbstract: true
})
export class PassageUpdateManyWithWhereWithoutPostInput {
  @TypeGraphQL.Field(_type => PassageScalarWhereInput, {
    nullable: false
  })
  where!: PassageScalarWhereInput;

  @TypeGraphQL.Field(_type => PassageUpdateManyMutationInput, {
    nullable: false
  })
  data!: PassageUpdateManyMutationInput;
}
