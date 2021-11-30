import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateWithoutPostsInput } from "../inputs/LaptopCreateWithoutPostsInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopCreateOrConnectWithoutPostsInput", {
  isAbstract: true
})
export class LaptopCreateOrConnectWithoutPostsInput {
  @TypeGraphQL.Field(_type => LaptopWhereUniqueInput, {
    nullable: false
  })
  where!: LaptopWhereUniqueInput;

  @TypeGraphQL.Field(_type => LaptopCreateWithoutPostsInput, {
    nullable: false
  })
  create!: LaptopCreateWithoutPostsInput;
}
