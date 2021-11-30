import * as TypeGraphQL from "type-graphql";

export enum OS {
  FREEDOS = "FREEDOS",
  WINDOWS = "WINDOWS",
  MACOS = "MACOS",
  LINUX = "LINUX",
  ANDROID = "ANDROID"
}
TypeGraphQL.registerEnumType(OS, {
  name: "OS",
  description: undefined,
});
