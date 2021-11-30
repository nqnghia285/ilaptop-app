import { applyModelsEnhanceMap, ModelsEnhanceMap } from '@generated/type-graphql'
import Comment from '~/graphql/config/models/Comment'
import Customer from '~/graphql/config/models/Customer'
import Discount from '~/graphql/config/models/Discount'
import Laptop from '~/graphql/config/models/Laptop'
import Passage from '~/graphql/config/models/Passage'
import Person from '~/graphql/config/models/Person'
import Post from '~/graphql/config/models/Post'
import PriceMap from '~/graphql/config/models/PriceMap'
import Purchase from '~/graphql/config/models/Purchase'
import User from '~/graphql/config/models/User'
export function configModels() {
   const modelsEnhanceMap: ModelsEnhanceMap = {
      Comment,
      Customer,
      Discount,
      Laptop,
      Passage,
      Person,
      Post,
      PriceMap,
      Purchase,
      User,
   }

   applyModelsEnhanceMap(modelsEnhanceMap)
}
