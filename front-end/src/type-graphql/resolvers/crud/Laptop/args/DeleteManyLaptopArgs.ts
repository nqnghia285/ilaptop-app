import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LaptopWhereInput } from "../../../inputs/LaptopWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLaptopArgs {
  @TypeGraphQL.Field(_type => LaptopWhereInput, {
    nullable: true
  })
  where?: LaptopWhereInput | undefined;
}
