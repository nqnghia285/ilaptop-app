import { applyInputTypesEnhanceMap } from '@generated/type-graphql'
import PriceMapCreateInput from '~/graphql/config/inputs/PriceMap/PriceMapCreateInput'
import PriceMapCreateNestedOneWithoutLaptopsInput from '~/graphql/config/inputs/PriceMap/PriceMapCreateNestedOneWithoutLaptopsInput'
import PriceMapCreateOrConnectWithoutLaptopsInput from '~/graphql/config/inputs/PriceMap/PriceMapCreateOrConnectWithoutLaptopsInput'
import PriceMapUpdateInput from '~/graphql/config/inputs/PriceMap/PriceMapUpdateInput'
import PriceMapUpdateOneWithoutLaptopsInput from '~/graphql/config/inputs/PriceMap/PriceMapUpdateOneWithoutLaptopsInput'
import PriceMapUpsertWithoutLaptopsInput from '~/graphql/config/inputs/PriceMap/PriceMapUpsertWithoutLaptopsInput'

export function configPriceMapInputs() {
   applyInputTypesEnhanceMap({
      PriceMapCreateInput,
      PriceMapCreateNestedOneWithoutLaptopsInput,
      PriceMapCreateOrConnectWithoutLaptopsInput,
      PriceMapUpdateInput,
      PriceMapUpdateOneWithoutLaptopsInput,
      PriceMapUpsertWithoutLaptopsInput,
   })
}
