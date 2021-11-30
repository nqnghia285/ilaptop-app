import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LaptopUpdateInput } from "../../../inputs/LaptopUpdateInput";
import { LaptopWhereUniqueInput } from "../../../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateLaptopArgs {
  @TypeGraphQL.Field(_type => LaptopUpdateInput, {
    nullable: false
  })
  data!: LaptopUpdateInput;

  @TypeGraphQL.Field(_type => LaptopWhereUniqueInput, {
    nullable: false
  })
  where!: LaptopWhereUniqueInput;
}
