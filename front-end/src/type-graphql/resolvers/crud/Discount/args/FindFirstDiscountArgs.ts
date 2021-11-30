import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DiscountOrderByWithRelationInput } from "../../../inputs/DiscountOrderByWithRelationInput";
import { DiscountWhereInput } from "../../../inputs/DiscountWhereInput";
import { DiscountWhereUniqueInput } from "../../../inputs/DiscountWhereUniqueInput";
import { DiscountScalarFieldEnum } from "../../../../enums/DiscountScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstDiscountArgs {
  @TypeGraphQL.Field(_type => DiscountWhereInput, {
    nullable: true
  })
  where?: DiscountWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DiscountOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: DiscountOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DiscountWhereUniqueInput, {
    nullable: true
  })
  cursor?: DiscountWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DiscountScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "value" | "createdAt" | "updatedAt"> | undefined;
}
