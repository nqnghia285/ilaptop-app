import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LaptopCreateInput } from "../../../inputs/LaptopCreateInput";
import { LaptopUpdateInput } from "../../../inputs/LaptopUpdateInput";
import { LaptopWhereUniqueInput } from "../../../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertLaptopArgs {
  @TypeGraphQL.Field(_type => LaptopWhereUniqueInput, {
    nullable: false
  })
  where!: LaptopWhereUniqueInput;

  @TypeGraphQL.Field(_type => LaptopCreateInput, {
    nullable: false
  })
  create!: LaptopCreateInput;

  @TypeGraphQL.Field(_type => LaptopUpdateInput, {
    nullable: false
  })
  update!: LaptopUpdateInput;
}
