import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutLaptopInput } from "../inputs/CommentCreateWithoutLaptopInput";
import { CommentUpdateWithoutLaptopInput } from "../inputs/CommentUpdateWithoutLaptopInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutLaptopInput", {
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutLaptopInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutLaptopInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutLaptopInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutLaptopInput, {
    nullable: false
  })
  create!: CommentCreateWithoutLaptopInput;
}
