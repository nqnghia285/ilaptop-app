import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LaptopWhereUniqueInput } from "../../../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLaptopArgs {
  @TypeGraphQL.Field(_type => LaptopWhereUniqueInput, {
    nullable: false
  })
  where!: LaptopWhereUniqueInput;
}
