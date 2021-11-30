import { applyInputTypesEnhanceMap } from '@generated/type-graphql'
import CustomerCreateInput from '~/graphql/config/inputs/Customer/CustomerCreateInput'
import CustomerCreateManyInput from '~/graphql/config/inputs/Customer/CustomerCreateManyInput'
import CustomerCreateNestedOneWithoutProfileInput from '~/graphql/config/inputs/Customer/CustomerCreateNestedOneWithoutProfileInput'
import CustomerCreateNestedOneWithoutPurchasesInput from '~/graphql/config/inputs/Customer/CustomerCreateNestedOneWithoutPurchasesInput'
import CustomerCreateOrConnectWithoutProfileInput from '~/graphql/config/inputs/Customer/CustomerCreateOrConnectWithoutProfileInput'
import CustomerCreateOrConnectWithoutPurchasesInput from '~/graphql/config/inputs/Customer/CustomerCreateOrConnectWithoutPurchasesInput'
import CustomerCreateWithoutProfileInput from '~/graphql/config/inputs/Customer/CustomerCreateWithoutProfileInput'
import CustomerCreateWithoutPurchasesInput from '~/graphql/config/inputs/Customer/CustomerCreateWithoutPurchasesInput'
import CustomerUpdateInput from '~/graphql/config/inputs/Customer/CustomerUpdateInput'
import CustomerUpdateOneRequiredWithoutPurchasesInput from '~/graphql/config/inputs/Customer/CustomerUpdateOneRequiredWithoutPurchasesInput'
import CustomerUpdateOneWithoutProfileInput from '~/graphql/config/inputs/Customer/CustomerUpdateOneWithoutProfileInput'
import CustomerUpdateWithoutProfileInput from '~/graphql/config/inputs/Customer/CustomerUpdateWithoutProfileInput'
import CustomerUpdateWithoutPurchasesInput from '~/graphql/config/inputs/Customer/CustomerUpdateWithoutPurchasesInput'
import CustomerUpsertWithoutProfileInput from '~/graphql/config/inputs/Customer/CustomerUpsertWithoutProfileInput'
import CustomerUpsertWithoutPurchasesInput from '~/graphql/config/inputs/Customer/CustomerUpsertWithoutPurchasesInput'

export function configCustomerInputs() {
   applyInputTypesEnhanceMap({
      CustomerCreateInput,
      CustomerCreateManyInput,
      CustomerCreateNestedOneWithoutProfileInput,
      CustomerCreateNestedOneWithoutPurchasesInput,
      CustomerCreateOrConnectWithoutProfileInput,
      CustomerCreateOrConnectWithoutPurchasesInput,
      CustomerCreateWithoutProfileInput,
      CustomerCreateWithoutPurchasesInput,
      CustomerUpdateInput,
      CustomerUpdateOneRequiredWithoutPurchasesInput,
      CustomerUpdateOneWithoutProfileInput,
      CustomerUpdateWithoutProfileInput,
      CustomerUpdateWithoutPurchasesInput,
      CustomerUpsertWithoutProfileInput,
      CustomerUpsertWithoutPurchasesInput,
   })
}
