import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateOrConnectWithoutPostsInput } from "../inputs/LaptopCreateOrConnectWithoutPostsInput";
import { LaptopCreateWithoutPostsInput } from "../inputs/LaptopCreateWithoutPostsInput";
import { LaptopScalarWhereInput } from "../inputs/LaptopScalarWhereInput";
import { LaptopUpdateManyWithWhereWithoutPostsInput } from "../inputs/LaptopUpdateManyWithWhereWithoutPostsInput";
import { LaptopUpdateWithWhereUniqueWithoutPostsInput } from "../inputs/LaptopUpdateWithWhereUniqueWithoutPostsInput";
import { LaptopUpsertWithWhereUniqueWithoutPostsInput } from "../inputs/LaptopUpsertWithWhereUniqueWithoutPostsInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopUpdateManyWithoutPostsInput", {
  isAbstract: true
})
export class LaptopUpdateManyWithoutPostsInput {
  @TypeGraphQL.Field(_type => [LaptopCreateWithoutPostsInput], {
    nullable: true
  })
  create?: LaptopCreateWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopCreateOrConnectWithoutPostsInput], {
    nullable: true
  })
  connectOrCreate?: LaptopCreateOrConnectWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopUpsertWithWhereUniqueWithoutPostsInput], {
    nullable: true
  })
  upsert?: LaptopUpsertWithWhereUniqueWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopWhereUniqueInput], {
    nullable: true
  })
  connect?: LaptopWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopWhereUniqueInput], {
    nullable: true
  })
  set?: LaptopWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LaptopWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopWhereUniqueInput], {
    nullable: true
  })
  delete?: LaptopWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopUpdateWithWhereUniqueWithoutPostsInput], {
    nullable: true
  })
  update?: LaptopUpdateWithWhereUniqueWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopUpdateManyWithWhereWithoutPostsInput], {
    nullable: true
  })
  updateMany?: LaptopUpdateManyWithWhereWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LaptopScalarWhereInput[] | undefined;
}
