import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LaptopOrderByWithRelationInput } from "../../../inputs/LaptopOrderByWithRelationInput";
import { LaptopWhereInput } from "../../../inputs/LaptopWhereInput";
import { LaptopWhereUniqueInput } from "../../../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLaptopArgs {
  @TypeGraphQL.Field(_type => LaptopWhereInput, {
    nullable: true
  })
  where?: LaptopWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LaptopOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LaptopOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LaptopWhereUniqueInput, {
    nullable: true
  })
  cursor?: LaptopWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
