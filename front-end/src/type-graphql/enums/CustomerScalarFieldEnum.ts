import * as TypeGraphQL from "type-graphql";

export enum CustomerScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(CustomerScalarFieldEnum, {
  name: "CustomerScalarFieldEnum",
  description: undefined,
});
