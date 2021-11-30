import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LaptopOrderByWithAggregationInput } from "../../../inputs/LaptopOrderByWithAggregationInput";
import { LaptopScalarWhereWithAggregatesInput } from "../../../inputs/LaptopScalarWhereWithAggregatesInput";
import { LaptopWhereInput } from "../../../inputs/LaptopWhereInput";
import { LaptopScalarFieldEnum } from "../../../../enums/LaptopScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLaptopArgs {
  @TypeGraphQL.Field(_type => LaptopWhereInput, {
    nullable: true
  })
  where?: LaptopWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LaptopOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LaptopOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "brand" | "model" | "material" | "display" | "cpu" | "ram" | "graphicCard" | "ports" | "wifi" | "storage" | "webcam" | "fans" | "speakers" | "keyboard" | "security" | "adapter" | "specialFeatures" | "dimensionsAndWeight" | "releaseDate" | "os" | "priceMapId" | "discountId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => LaptopScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LaptopScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
