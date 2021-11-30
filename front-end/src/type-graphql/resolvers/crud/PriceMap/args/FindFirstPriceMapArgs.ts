import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PriceMapOrderByWithRelationInput } from "../../../inputs/PriceMapOrderByWithRelationInput";
import { PriceMapWhereInput } from "../../../inputs/PriceMapWhereInput";
import { PriceMapWhereUniqueInput } from "../../../inputs/PriceMapWhereUniqueInput";
import { PriceMapScalarFieldEnum } from "../../../../enums/PriceMapScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPriceMapArgs {
  @TypeGraphQL.Field(_type => PriceMapWhereInput, {
    nullable: true
  })
  where?: PriceMapWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PriceMapOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PriceMapOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PriceMapWhereUniqueInput, {
    nullable: true
  })
  cursor?: PriceMapWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PriceMapScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "price" | "createdAt" | "updatedAt"> | undefined;
}
