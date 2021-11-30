import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopScalarWhereInput } from "../inputs/LaptopScalarWhereInput";
import { LaptopUpdateManyMutationInput } from "../inputs/LaptopUpdateManyMutationInput";

@TypeGraphQL.InputType("LaptopUpdateManyWithWhereWithoutPostsInput", {
  isAbstract: true
})
export class LaptopUpdateManyWithWhereWithoutPostsInput {
  @TypeGraphQL.Field(_type => LaptopScalarWhereInput, {
    nullable: false
  })
  where!: LaptopScalarWhereInput;

  @TypeGraphQL.Field(_type => LaptopUpdateManyMutationInput, {
    nullable: false
  })
  data!: LaptopUpdateManyMutationInput;
}
