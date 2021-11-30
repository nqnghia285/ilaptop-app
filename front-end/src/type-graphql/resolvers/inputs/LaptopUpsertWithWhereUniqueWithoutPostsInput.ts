import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateWithoutPostsInput } from "../inputs/LaptopCreateWithoutPostsInput";
import { LaptopUpdateWithoutPostsInput } from "../inputs/LaptopUpdateWithoutPostsInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopUpsertWithWhereUniqueWithoutPostsInput", {
  isAbstract: true
})
export class LaptopUpsertWithWhereUniqueWithoutPostsInput {
  @TypeGraphQL.Field(_type => LaptopWhereUniqueInput, {
    nullable: false
  })
  where!: LaptopWhereUniqueInput;

  @TypeGraphQL.Field(_type => LaptopUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: LaptopUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => LaptopCreateWithoutPostsInput, {
    nullable: false
  })
  create!: LaptopCreateWithoutPostsInput;
}
