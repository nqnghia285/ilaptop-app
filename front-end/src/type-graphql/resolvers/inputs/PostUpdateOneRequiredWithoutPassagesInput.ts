import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutPassagesInput } from "../inputs/PostCreateOrConnectWithoutPassagesInput";
import { PostCreateWithoutPassagesInput } from "../inputs/PostCreateWithoutPassagesInput";
import { PostUpdateWithoutPassagesInput } from "../inputs/PostUpdateWithoutPassagesInput";
import { PostUpsertWithoutPassagesInput } from "../inputs/PostUpsertWithoutPassagesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutPassagesInput", {
  isAbstract: true
})
export class PostUpdateOneRequiredWithoutPassagesInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutPassagesInput, {
    nullable: true
  })
  create?: PostCreateWithoutPassagesInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutPassagesInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutPassagesInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutPassagesInput, {
    nullable: true
  })
  upsert?: PostUpsertWithoutPassagesInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutPassagesInput, {
    nullable: true
  })
  update?: PostUpdateWithoutPassagesInput | undefined;
}
