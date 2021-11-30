import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseCreateManyCustomerInputEnvelope } from "../inputs/PurchaseCreateManyCustomerInputEnvelope";
import { PurchaseCreateOrConnectWithoutCustomerInput } from "../inputs/PurchaseCreateOrConnectWithoutCustomerInput";
import { PurchaseCreateWithoutCustomerInput } from "../inputs/PurchaseCreateWithoutCustomerInput";
import { PurchaseScalarWhereInput } from "../inputs/PurchaseScalarWhereInput";
import { PurchaseUpdateManyWithWhereWithoutCustomerInput } from "../inputs/PurchaseUpdateManyWithWhereWithoutCustomerInput";
import { PurchaseUpdateWithWhereUniqueWithoutCustomerInput } from "../inputs/PurchaseUpdateWithWhereUniqueWithoutCustomerInput";
import { PurchaseUpsertWithWhereUniqueWithoutCustomerInput } from "../inputs/PurchaseUpsertWithWhereUniqueWithoutCustomerInput";
import { PurchaseWhereUniqueInput } from "../inputs/PurchaseWhereUniqueInput";

@TypeGraphQL.InputType("PurchaseUpdateManyWithoutCustomerInput", {
  isAbstract: true
})
export class PurchaseUpdateManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [PurchaseCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: PurchaseCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: PurchaseCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseUpsertWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  upsert?: PurchaseUpsertWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => PurchaseCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: PurchaseCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PurchaseWhereUniqueInput], {
    nullable: true
  })
  connect?: PurchaseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseWhereUniqueInput], {
    nullable: true
  })
  set?: PurchaseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PurchaseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseWhereUniqueInput], {
    nullable: true
  })
  delete?: PurchaseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseUpdateWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  update?: PurchaseUpdateWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseUpdateManyWithWhereWithoutCustomerInput], {
    nullable: true
  })
  updateMany?: PurchaseUpdateManyWithWhereWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PurchaseScalarWhereInput[] | undefined;
}
