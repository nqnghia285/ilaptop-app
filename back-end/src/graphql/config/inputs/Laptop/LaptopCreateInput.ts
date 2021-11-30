import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, IsDate, Length, ValidateNested } from 'class-validator'

const LaptopCreateInput: InputTypeConfig<'LaptopCreateInput'> = {
   fields: {
      _all: [Allow()],
      adapter: [Length(0, 255)],
      brand: [Length(0, 255)],
      cpu: [Length(0, 255)],
      dimensionsAndWeight: [Length(0, 255)],
      display: [Length(0, 255)],
      fans: [Length(0, 255)],
      graphicCard: [Length(0, 255)],
      keyboard: [Length(0, 255)],
      material: [Length(0, 255)],
      model: [Length(0, 255)],
      ports: [Length(0, 255)],
      ram: [Length(0, 255)],
      releaseDate: [IsDate()],
      security: [Length(0, 255)],
      speakers: [Length(0, 255)],
      specialFeatures: [Length(0, 255)],
      storage: [Length(0, 255)],
      webcam: [Length(0, 255)],
      wifi: [Length(0, 255)],
      comments: [ValidateNested()],
      discount: [ValidateNested()],
      posts: [ValidateNested()],
      priceMap: [ValidateNested()],
      purchases: [ValidateNested()],
   },
}

export default LaptopCreateInput
