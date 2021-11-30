import * as TypeGraphQL from "type-graphql";

export enum PurchaseScalarFieldEnum {
  id = "id",
  customerId = "customerId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(PurchaseScalarFieldEnum, {
  name: "PurchaseScalarFieldEnum",
  description: undefined,
});
