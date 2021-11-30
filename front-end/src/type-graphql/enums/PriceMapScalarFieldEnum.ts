import * as TypeGraphQL from "type-graphql";

export enum PriceMapScalarFieldEnum {
  id = "id",
  price = "price",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(PriceMapScalarFieldEnum, {
  name: "PriceMapScalarFieldEnum",
  description: undefined,
});
