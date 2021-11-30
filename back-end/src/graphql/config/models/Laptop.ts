import { ModelConfig } from '@generated/type-graphql'
import { Field } from 'type-graphql'

const Laptop: ModelConfig<'Laptop'> = {
   fields: {
      createdAt: [Field({ name: 'created_at' })],
      dimensionsAndWeight: [Field({ name: 'dimensions_and_weight' })],
      discountId: [Field({ name: 'discount_id' })],
      graphicCard: [Field({ name: 'graphic_card' })],
      priceMapId: [Field({ name: 'price_map' })],
      releaseDate: [Field({ name: 'release_date' })],
      specialFeatures: [Field({ name: 'special_features' })],
      updatedAt: [Field({ name: 'updated_at' })],
   },
}

export default Laptop
