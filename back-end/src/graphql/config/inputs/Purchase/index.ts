import { applyInputTypesEnhanceMap } from '@generated/type-graphql'
import PurchaseCreateInput from '~/graphql/config/inputs/Purchase/PurchaseCreateInput'
import PurchaseCreateManyCustomerInputEnvelope from '~/graphql/config/inputs/Purchase/PurchaseCreateManyCustomerInputEnvelope'
import PurchaseCreateNestedManyWithoutCustomerInput from '~/graphql/config/inputs/Purchase/PurchaseCreateNestedManyWithoutCustomerInput'
import PurchaseCreateNestedManyWithoutLaptopsInput from '~/graphql/config/inputs/Purchase/PurchaseCreateNestedManyWithoutLaptopsInput'
import PurchaseCreateOrConnectWithoutCustomerInput from '~/graphql/config/inputs/Purchase/PurchaseCreateOrConnectWithoutCustomerInput'
import PurchaseCreateOrConnectWithoutLaptopsInput from '~/graphql/config/inputs/Purchase/PurchaseCreateOrConnectWithoutLaptopsInput'
import PurchaseCreateWithoutCustomerInput from '~/graphql/config/inputs/Purchase/PurchaseCreateWithoutCustomerInput'
import PurchaseCreateWithoutLaptopsInput from '~/graphql/config/inputs/Purchase/PurchaseCreateWithoutLaptopsInput'
import PurchaseUpdateInput from '~/graphql/config/inputs/Purchase/PurchaseUpdateInput'
import PurchaseUpdateManyWithWhereWithoutCustomerInput from '~/graphql/config/inputs/Purchase/PurchaseUpdateManyWithWhereWithoutCustomerInput'
import PurchaseUpdateManyWithWhereWithoutLaptopsInput from '~/graphql/config/inputs/Purchase/PurchaseUpdateManyWithWhereWithoutLaptopsInput'
import PurchaseUpdateManyWithoutCustomerInput from '~/graphql/config/inputs/Purchase/PurchaseUpdateManyWithoutCustomerInput'
import PurchaseUpdateManyWithoutLaptopsInput from '~/graphql/config/inputs/Purchase/PurchaseUpdateManyWithoutLaptopsInput'
import PurchaseUpdateWithWhereUniqueWithoutCustomerInput from '~/graphql/config/inputs/Purchase/PurchaseUpdateWithWhereUniqueWithoutCustomerInput'
import PurchaseUpdateWithWhereUniqueWithoutLaptopsInput from '~/graphql/config/inputs/Purchase/PurchaseUpdateWithWhereUniqueWithoutLaptopsInput'
import PurchaseUpdateWithoutCustomerInput from '~/graphql/config/inputs/Purchase/PurchaseUpdateWithoutCustomerInput'
import PurchaseUpdateWithoutLaptopsInput from '~/graphql/config/inputs/Purchase/PurchaseUpdateWithoutLaptopsInput'
import PurchaseUpsertWithWhereUniqueWithoutCustomerInput from '~/graphql/config/inputs/Purchase/PurchaseUpsertWithWhereUniqueWithoutCustomerInput'
import PurchaseUpsertWithWhereUniqueWithoutLaptopsInput from '~/graphql/config/inputs/Purchase/PurchaseUpsertWithWhereUniqueWithoutLaptopsInput'

export function configPurchaseInputs() {
   applyInputTypesEnhanceMap({
      PurchaseCreateInput,
      PurchaseCreateManyCustomerInputEnvelope,
      PurchaseCreateNestedManyWithoutCustomerInput,
      PurchaseCreateNestedManyWithoutLaptopsInput,
      PurchaseCreateOrConnectWithoutCustomerInput,
      PurchaseCreateOrConnectWithoutLaptopsInput,
      PurchaseCreateWithoutCustomerInput,
      PurchaseCreateWithoutLaptopsInput,
      PurchaseUpdateInput,
      PurchaseUpdateManyWithWhereWithoutCustomerInput,
      PurchaseUpdateManyWithWhereWithoutLaptopsInput,
      PurchaseUpdateManyWithoutCustomerInput,
      PurchaseUpdateManyWithoutLaptopsInput,
      PurchaseUpdateWithWhereUniqueWithoutCustomerInput,
      PurchaseUpdateWithWhereUniqueWithoutLaptopsInput,
      PurchaseUpdateWithoutCustomerInput,
      PurchaseUpdateWithoutLaptopsInput,
      PurchaseUpsertWithWhereUniqueWithoutCustomerInput,
      PurchaseUpsertWithWhereUniqueWithoutLaptopsInput,
   })
}
