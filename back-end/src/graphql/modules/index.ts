import {
   CommentCrudResolver,
   CommentRelationsResolver,
   CustomerCrudResolver,
   CustomerRelationsResolver,
   DiscountCrudResolver,
   DiscountRelationsResolver,
   LaptopCrudResolver,
   LaptopRelationsResolver,
   PassageCrudResolver,
   PassageRelationsResolver,
   PersonCrudResolver,
   PersonRelationsResolver,
   PostCrudResolver,
   PostRelationsResolver,
   PriceMapCrudResolver,
   PriceMapRelationsResolver,
   PurchaseCrudResolver,
   PurchaseRelationsResolver,
   UserCrudResolver,
   UserRelationsResolver,
} from '@generated/type-graphql'
import { Module } from '@nestjs/common'
import { CustomUserModule } from '~/graphql/modules/CustomUser.module'

const Resolvers = [
   CommentCrudResolver,
   CustomerCrudResolver,
   DiscountCrudResolver,
   LaptopCrudResolver,
   PassageCrudResolver,
   PersonCrudResolver,
   PostCrudResolver,
   PriceMapCrudResolver,
   PurchaseCrudResolver,
   UserCrudResolver,
   CommentRelationsResolver,
   CustomerRelationsResolver,
   DiscountRelationsResolver,
   LaptopRelationsResolver,
   PassageRelationsResolver,
   PersonRelationsResolver,
   PostRelationsResolver,
   PriceMapRelationsResolver,
   PurchaseRelationsResolver,
   UserRelationsResolver,
]

@Module({
   // Placing custom modules here
   imports: [CustomUserModule],
   providers: [...Resolvers],
   // Exporting custom modules to AppModule can resolve them
   exports: [CustomUserModule],
})
export class GraphQLModules {}
