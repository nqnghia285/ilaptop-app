import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LaptopCreateInput } from "../../../inputs/LaptopCreateInput";

@TypeGraphQL.ArgsType()
export class CreateLaptopArgs {
  @TypeGraphQL.Field(_type => LaptopCreateInput, {
    nullable: false
  })
  data!: LaptopCreateInput;
}
