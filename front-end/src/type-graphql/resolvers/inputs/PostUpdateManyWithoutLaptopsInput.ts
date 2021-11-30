import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutLaptopsInput } from "../inputs/PostCreateOrConnectWithoutLaptopsInput";
import { PostCreateWithoutLaptopsInput } from "../inputs/PostCreateWithoutLaptopsInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutLaptopsInput } from "../inputs/PostUpdateManyWithWhereWithoutLaptopsInput";
import { PostUpdateWithWhereUniqueWithoutLaptopsInput } from "../inputs/PostUpdateWithWhereUniqueWithoutLaptopsInput";
import { PostUpsertWithWhereUniqueWithoutLaptopsInput } from "../inputs/PostUpsertWithWhereUniqueWithoutLaptopsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateManyWithoutLaptopsInput", {
  isAbstract: true
})
export class PostUpdateManyWithoutLaptopsInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutLaptopsInput], {
    nullable: true
  })
  create?: PostCreateWithoutLaptopsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutLaptopsInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutLaptopsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutLaptopsInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutLaptopsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  set?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutLaptopsInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutLaptopsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutLaptopsInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutLaptopsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
