import * as TypeGraphQL from "type-graphql";

export enum LaptopScalarFieldEnum {
  id = "id",
  brand = "brand",
  model = "model",
  material = "material",
  display = "display",
  cpu = "cpu",
  ram = "ram",
  graphicCard = "graphicCard",
  ports = "ports",
  wifi = "wifi",
  storage = "storage",
  webcam = "webcam",
  fans = "fans",
  speakers = "speakers",
  keyboard = "keyboard",
  security = "security",
  adapter = "adapter",
  specialFeatures = "specialFeatures",
  dimensionsAndWeight = "dimensionsAndWeight",
  releaseDate = "releaseDate",
  os = "os",
  priceMapId = "priceMapId",
  discountId = "discountId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(LaptopScalarFieldEnum, {
  name: "LaptopScalarFieldEnum",
  description: undefined,
});
