import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutLaptopInput } from "../inputs/CommentCreateWithoutLaptopInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateOrConnectWithoutLaptopInput", {
  isAbstract: true
})
export class CommentCreateOrConnectWithoutLaptopInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutLaptopInput, {
    nullable: false
  })
  create!: CommentCreateWithoutLaptopInput;
}
