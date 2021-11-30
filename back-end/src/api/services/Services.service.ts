import { Injectable } from '@nestjs/common'
import { CommentService } from '~/api/services/Comment.service'
import { CustomerService } from '~/api/services/Customer.service'
import { DiscountService } from '~/api/services/Discount.service'
import { LaptopService } from '~/api/services/Laptop.service'
import { PassageService } from '~/api/services/Passage.service'
import { PersonService } from '~/api/services/Person.service'
import { PostService } from '~/api/services/Post.service'
import { PriceMapService } from '~/api/services/PriceMap.service'
import { PurchaseService } from '~/api/services/Purchase.service'
import { UserService } from '~/api/services/User.service'

@Injectable()
export class Services {
   constructor(
      private commentService: CommentService,
      private customerService: CustomerService,
      private discountService: DiscountService,
      private laptopService: LaptopService,
      private passageService: PassageService,
      private personService: PersonService,
      private postService: PostService,
      private priceMapService: PriceMapService,
      private purchaseService: PurchaseService,
      private userService: UserService
   ) {}

   get comment() {
      return this.commentService
   }

   get customer() {
      return this.customerService
   }

   get discount() {
      return this.discountService
   }

   get laptop() {
      return this.laptopService
   }

   get passage() {
      return this.passageService
   }

   get person() {
      return this.personService
   }

   get post() {
      return this.postService
   }

   get priceMap() {
      return this.priceMapService
   }

   get purchase() {
      return this.purchaseService
   }

   get user() {
      return this.userService
   }
}
