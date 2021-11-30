import { InputTypeConfig } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'
import { IsDateForUpdateField, LengthForUpdateField } from '~/graphql/decorators'

const LaptopUpdateInput: InputTypeConfig<'LaptopUpdateInput'> = {
   fields: {
      _all: [Allow(), ValidateNested()],
      adapter: [LengthForUpdateField(0, 255)],
      brand: [LengthForUpdateField(0, 255)],
      cpu: [LengthForUpdateField(0, 255)],
      dimensionsAndWeight: [LengthForUpdateField(0, 255)],
      display: [LengthForUpdateField(0, 255)],
      fans: [LengthForUpdateField(0, 255)],
      graphicCard: [LengthForUpdateField(0, 255)],
      keyboard: [LengthForUpdateField(0, 255)],
      material: [LengthForUpdateField(0, 255)],
      model: [LengthForUpdateField(0, 255)],
      ports: [LengthForUpdateField(0, 255)],
      ram: [LengthForUpdateField(0, 255)],
      releaseDate: [IsDateForUpdateField()],
      security: [LengthForUpdateField(0, 255)],
      speakers: [LengthForUpdateField(0, 255)],
      specialFeatures: [LengthForUpdateField(0, 255)],
      storage: [LengthForUpdateField(0, 255)],
      webcam: [LengthForUpdateField(0, 255)],
      wifi: [LengthForUpdateField(0, 255)],
   },
}

export default LaptopUpdateInput
