import { configCommentInputs } from '~/graphql/config/inputs/Comment'
import { configCustomerInputs } from '~/graphql/config/inputs/Customer'
import { configDiscountInputs } from '~/graphql/config/inputs/Discount'
import { configLaptopInputs } from '~/graphql/config/inputs/Laptop'
import { configPassageInputs } from '~/graphql/config/inputs/Passage'
import { configPersonInputs } from '~/graphql/config/inputs/Person'
import { configPostInputs } from '~/graphql/config/inputs/Post'
import { configPriceMapInputs } from '~/graphql/config/inputs/PriceMap'
import { configPurchaseInputs } from '~/graphql/config/inputs/Purchase'
import { configUserInputs } from '~/graphql/config/inputs/User'

export function configInputs() {
   configCommentInputs()
   configCustomerInputs()
   configDiscountInputs()
   configLaptopInputs()
   configPassageInputs()
   configPersonInputs()
   configPostInputs()
   configPriceMapInputs()
   configPurchaseInputs()
   configUserInputs()
}
