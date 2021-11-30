import { applyResolversEnhanceMap, ResolversEnhanceMap } from '@generated/type-graphql'
import Comment from '~/graphql/config/resolvers/Comment'
import Customer from '~/graphql/config/resolvers/Customer'
import Discount from '~/graphql/config/resolvers/Discount'
import Laptop from '~/graphql/config/resolvers/Laptop'
import Passage from '~/graphql/config/resolvers/Passage'
import Person from '~/graphql/config/resolvers/Person'
import Post from '~/graphql/config/resolvers/Post'
import PriceMap from '~/graphql/config/resolvers/PriceMap'
import Purchase from '~/graphql/config/resolvers/Purchase'
import User from '~/graphql/config/resolvers/User'

export function configResolvers() {
   const resolversEnhanceMap: ResolversEnhanceMap = {
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

   applyResolversEnhanceMap(resolversEnhanceMap)
}
