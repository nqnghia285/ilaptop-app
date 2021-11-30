import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateOrConnectWithoutCommentsInput } from "../inputs/LaptopCreateOrConnectWithoutCommentsInput";
import { LaptopCreateWithoutCommentsInput } from "../inputs/LaptopCreateWithoutCommentsInput";
import { LaptopUpdateWithoutCommentsInput } from "../inputs/LaptopUpdateWithoutCommentsInput";
import { LaptopUpsertWithoutCommentsInput } from "../inputs/LaptopUpsertWithoutCommentsInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopUpdateOneRequiredWithoutCommentsInput", {
  isAbstract: true
})
export class LaptopUpdateOneRequiredWithoutCommentsInput {
  @TypeGraphQL.Field(_type => LaptopCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: LaptopCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => LaptopCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: LaptopCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => LaptopUpsertWithoutCommentsInput, {
    nullable: true
  })
  upsert?: LaptopUpsertWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => LaptopWhereUniqueInput, {
    nullable: true
  })
  connect?: LaptopWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LaptopUpdateWithoutCommentsInput, {
    nullable: true
  })
  update?: LaptopUpdateWithoutCommentsInput | undefined;
}
