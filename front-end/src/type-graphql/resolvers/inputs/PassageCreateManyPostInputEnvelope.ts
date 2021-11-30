import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PassageCreateManyPostInput } from "../inputs/PassageCreateManyPostInput";

@TypeGraphQL.InputType("PassageCreateManyPostInputEnvelope", {
  isAbstract: true
})
export class PassageCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [PassageCreateManyPostInput], {
    nullable: false
  })
  data!: PassageCreateManyPostInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
