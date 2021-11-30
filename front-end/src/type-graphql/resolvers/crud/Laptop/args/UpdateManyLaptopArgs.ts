import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LaptopUpdateManyMutationInput } from "../../../inputs/LaptopUpdateManyMutationInput";
import { LaptopWhereInput } from "../../../inputs/LaptopWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLaptopArgs {
  @TypeGraphQL.Field(_type => LaptopUpdateManyMutationInput, {
    nullable: false
  })
  data!: LaptopUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LaptopWhereInput, {
    nullable: true
  })
  where?: LaptopWhereInput | undefined;
}
