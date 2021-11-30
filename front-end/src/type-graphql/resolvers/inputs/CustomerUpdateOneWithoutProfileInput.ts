import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutProfileInput } from "../inputs/CustomerCreateOrConnectWithoutProfileInput";
import { CustomerCreateWithoutProfileInput } from "../inputs/CustomerCreateWithoutProfileInput";
import { CustomerUpdateWithoutProfileInput } from "../inputs/CustomerUpdateWithoutProfileInput";
import { CustomerUpsertWithoutProfileInput } from "../inputs/CustomerUpsertWithoutProfileInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateOneWithoutProfileInput", {
  isAbstract: true
})
export class CustomerUpdateOneWithoutProfileInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutProfileInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutProfileInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpsertWithoutProfileInput, {
    nullable: true
  })
  upsert?: CustomerUpsertWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutProfileInput, {
    nullable: true
  })
  update?: CustomerUpdateWithoutProfileInput | undefined;
}
