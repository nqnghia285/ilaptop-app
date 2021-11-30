import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseCreateOrConnectWithoutLaptopsInput } from "../inputs/PurchaseCreateOrConnectWithoutLaptopsInput";
import { PurchaseCreateWithoutLaptopsInput } from "../inputs/PurchaseCreateWithoutLaptopsInput";
import { PurchaseScalarWhereInput } from "../inputs/PurchaseScalarWhereInput";
import { PurchaseUpdateManyWithWhereWithoutLaptopsInput } from "../inputs/PurchaseUpdateManyWithWhereWithoutLaptopsInput";
import { PurchaseUpdateWithWhereUniqueWithoutLaptopsInput } from "../inputs/PurchaseUpdateWithWhereUniqueWithoutLaptopsInput";
import { PurchaseUpsertWithWhereUniqueWithoutLaptopsInput } from "../inputs/PurchaseUpsertWithWhereUniqueWithoutLaptopsInput";
import { PurchaseWhereUniqueInput } from "../inputs/PurchaseWhereUniqueInput";

@TypeGraphQL.InputType("PurchaseUpdateManyWithoutLaptopsInput", {
  isAbstract: true
})
export class PurchaseUpdateManyWithoutLaptopsInput {
  @TypeGraphQL.Field(_type => [PurchaseCreateWithoutLaptopsInput], {
    nullable: true
  })
  create?: PurchaseCreateWithoutLaptopsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseCreateOrConnectWithoutLaptopsInput], {
    nullable: true
  })
  connectOrCreate?: PurchaseCreateOrConnectWithoutLaptopsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseUpsertWithWhereUniqueWithoutLaptopsInput], {
    nullable: true
  })
  upsert?: PurchaseUpsertWithWhereUniqueWithoutLaptopsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [PurchaseUpdateWithWhereUniqueWithoutLaptopsInput], {
    nullable: true
  })
  update?: PurchaseUpdateWithWhereUniqueWithoutLaptopsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseUpdateManyWithWhereWithoutLaptopsInput], {
    nullable: true
  })
  updateMany?: PurchaseUpdateManyWithWhereWithoutLaptopsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PurchaseScalarWhereInput[] | undefined;
}
