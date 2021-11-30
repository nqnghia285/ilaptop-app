import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PassageCreateManyPostInputEnvelope } from "../inputs/PassageCreateManyPostInputEnvelope";
import { PassageCreateOrConnectWithoutPostInput } from "../inputs/PassageCreateOrConnectWithoutPostInput";
import { PassageCreateWithoutPostInput } from "../inputs/PassageCreateWithoutPostInput";
import { PassageWhereUniqueInput } from "../inputs/PassageWhereUniqueInput";

@TypeGraphQL.InputType("PassageCreateNestedManyWithoutPostInput", {
  isAbstract: true
})
export class PassageCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [PassageCreateWithoutPostInput], {
    nullable: true
  })
  create?: PassageCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PassageCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: PassageCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PassageCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: PassageCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PassageWhereUniqueInput], {
    nullable: true
  })
  connect?: PassageWhereUniqueInput[] | undefined;
}
