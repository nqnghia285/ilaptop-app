import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyLaptopInputEnvelope } from "../inputs/CommentCreateManyLaptopInputEnvelope";
import { CommentCreateOrConnectWithoutLaptopInput } from "../inputs/CommentCreateOrConnectWithoutLaptopInput";
import { CommentCreateWithoutLaptopInput } from "../inputs/CommentCreateWithoutLaptopInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedManyWithoutLaptopInput", {
  isAbstract: true
})
export class CommentCreateNestedManyWithoutLaptopInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutLaptopInput], {
    nullable: true
  })
  create?: CommentCreateWithoutLaptopInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutLaptopInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutLaptopInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyLaptopInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyLaptopInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
