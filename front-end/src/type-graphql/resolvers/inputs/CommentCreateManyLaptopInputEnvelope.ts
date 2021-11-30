import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyLaptopInput } from "../inputs/CommentCreateManyLaptopInput";

@TypeGraphQL.InputType("CommentCreateManyLaptopInputEnvelope", {
  isAbstract: true
})
export class CommentCreateManyLaptopInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyLaptopInput], {
    nullable: false
  })
  data!: CommentCreateManyLaptopInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
