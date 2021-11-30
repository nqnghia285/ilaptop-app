import { applyInputTypesEnhanceMap } from '@generated/type-graphql'
import DiscountCreateInput from '~/graphql/config/inputs/Discount/DiscountCreateInput'
import DiscountCreateNestedOneWithoutLaptopsInput from '~/graphql/config/inputs/Discount/DiscountCreateNestedOneWithoutLaptopsInput'
import DiscountCreateOrConnectWithoutLaptopsInput from '~/graphql/config/inputs/Discount/DiscountCreateOrConnectWithoutLaptopsInput'
import DiscountUpdateInput from '~/graphql/config/inputs/Discount/DiscountUpdateInput'
import DiscountUpdateManyMutationInput from '~/graphql/config/inputs/Discount/DiscountUpdateManyMutationInput'
import DiscountUpdateOneWithoutLaptopsInput from '~/graphql/config/inputs/Discount/DiscountUpdateOneWithoutLaptopsInput'
import DiscountUpsertWithoutLaptopsInput from '~/graphql/config/inputs/Discount/DiscountUpsertWithoutLaptopsInput'

export function configDiscountInputs() {
   applyInputTypesEnhanceMap({
      DiscountCreateInput,
      DiscountCreateNestedOneWithoutLaptopsInput,
      DiscountCreateOrConnectWithoutLaptopsInput,
      DiscountUpdateInput,
      DiscountUpdateManyMutationInput,
      DiscountUpdateOneWithoutLaptopsInput,
      DiscountUpsertWithoutLaptopsInput,
   })
}
