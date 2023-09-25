import { ClassValidatorFields } from '../class-validator-fields'
import { ChurchValidationData } from './church-validation-data'

export default class ChurchValidationService extends ClassValidatorFields<ChurchValidationData> {
  validate(data: ChurchValidationData): boolean {
    return super.validate(new ChurchValidationData(data))
  }
}
