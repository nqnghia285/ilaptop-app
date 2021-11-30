import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateWithoutLaptopInput } from "../inputs/CommentUpdateWithoutLaptopInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutLaptopInput", {
  isAbstract: true
})
export class CommentUpdateWithWhereUniqueWithoutLaptopInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutLaptopInput, {
    nullable: false
  })
  data!: CommentUpdateWithoutLaptopInput;
}
