import * as TypeGraphQL from "type-graphql";

export enum Role {
  ADMIN = "ADMIN",
  STAFF = "STAFF"
}
TypeGraphQL.registerEnumType(Role, {
  name: "Role",
  description: undefined,
});
