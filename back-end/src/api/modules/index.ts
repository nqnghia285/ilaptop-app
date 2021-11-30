import { Module } from '@nestjs/common'
import { CommentModule } from '~/api/modules/Comment.module'
import { CustomerModule } from '~/api/modules/Customer.module'
import { DiscountModule } from '~/api/modules/Discount.module'
import { LaptopModule } from '~/api/modules/Laptop.module'
import { PassageModule } from '~/api/modules/Passage.module'
import { PersonModule } from '~/api/modules/Person.module'
import { PostModule } from '~/api/modules/Post.module'
import { PriceMapModule } from '~/api/modules/PriceMap.module'
import { PurchaseModule } from '~/api/modules/Purchase.module'
import { ServicesModule } from '~/api/modules/Services.module'
import { UserModule } from '~/api/modules/User.module'

@Module({
   imports: [
      CommentModule,
      CustomerModule,
      DiscountModule,
      LaptopModule,
      PassageModule,
      PersonModule,
      PostModule,
      PriceMapModule,
      PurchaseModule,
      ServicesModule,
      UserModule,
   ],
   exports: [
      CommentModule,
      CustomerModule,
      DiscountModule,
      LaptopModule,
      PassageModule,
      PersonModule,
      PostModule,
      PriceMapModule,
      PurchaseModule,
      ServicesModule,
      UserModule,
   ],
})
export class RestFullModules {}
