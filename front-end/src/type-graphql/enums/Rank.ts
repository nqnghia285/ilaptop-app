import * as TypeGraphQL from "type-graphql";

export enum Rank {
  ONE = "ONE",
  TWO = "TWO",
  THREE = "THREE",
  FOUR = "FOUR",
  FIVE = "FIVE"
}
TypeGraphQL.registerEnumType(Rank, {
  name: "Rank",
  description: undefined,
});
