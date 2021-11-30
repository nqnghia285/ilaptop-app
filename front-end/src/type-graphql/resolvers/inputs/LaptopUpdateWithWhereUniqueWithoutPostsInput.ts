import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopUpdateWithoutPostsInput } from "../inputs/LaptopUpdateWithoutPostsInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopUpdateWithWhereUniqueWithoutPostsInput", {
  isAbstract: true
})
export class LaptopUpdateWithWhereUniqueWithoutPostsInput {
  @TypeGraphQL.Field(_type => LaptopWhereUniqueInput, {
    nullable: false
  })
  where!: LaptopWhereUniqueInput;

  @TypeGraphQL.Field(_type => LaptopUpdateWithoutPostsInput, {
    nullable: false
  })
  data!: LaptopUpdateWithoutPostsInput;
}
