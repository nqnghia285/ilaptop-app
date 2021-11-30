import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Person } from "../models/Person";
import { Purchase } from "../models/Purchase";
import { CustomerCount } from "../resolvers/outputs/CustomerCount";

@TypeGraphQL.ObjectType("Customer", {
  isAbstract: true
})
export class Customer {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  profile?: Person;

  purchases?: Purchase[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => CustomerCount, {
    nullable: true
  })
  _count?: CustomerCount | null;
}
