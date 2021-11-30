import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateOrConnectWithoutPostsInput } from "../inputs/LaptopCreateOrConnectWithoutPostsInput";
import { LaptopCreateWithoutPostsInput } from "../inputs/LaptopCreateWithoutPostsInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopCreateNestedManyWithoutPostsInput", {
  isAbstract: true
})
export class LaptopCreateNestedManyWithoutPostsInput {
  @TypeGraphQL.Field(_type => [LaptopCreateWithoutPostsInput], {
    nullable: true
  })
  create?: LaptopCreateWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopCreateOrConnectWithoutPostsInput], {
    nullable: true
  })
  connectOrCreate?: LaptopCreateOrConnectWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopWhereUniqueInput], {
    nullable: true
  })
  connect?: LaptopWhereUniqueInput[] | undefined;
}
