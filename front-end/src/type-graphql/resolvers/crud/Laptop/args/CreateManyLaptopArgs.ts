import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LaptopCreateManyInput } from "../../../inputs/LaptopCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLaptopArgs {
  @TypeGraphQL.Field(_type => [LaptopCreateManyInput], {
    nullable: false
  })
  data!: LaptopCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
