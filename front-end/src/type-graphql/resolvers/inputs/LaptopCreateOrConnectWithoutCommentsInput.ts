import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateWithoutCommentsInput } from "../inputs/LaptopCreateWithoutCommentsInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopCreateOrConnectWithoutCommentsInput", {
  isAbstract: true
})
export class LaptopCreateOrConnectWithoutCommentsInput {
  @TypeGraphQL.Field(_type => LaptopWhereUniqueInput, {
    nullable: false
  })
  where!: LaptopWhereUniqueInput;

  @TypeGraphQL.Field(_type => LaptopCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: LaptopCreateWithoutCommentsInput;
}
