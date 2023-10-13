import { ClassValidatorFields } from '../class-validator-fields'
import { ChurchRules } from './church-validations-rules'

export default class ChurchValidator extends ClassValidatorFields<ChurchRules> {
  validate(data: ChurchRules): boolean {
    return super.validate(new ChurchRules(data))
  }
}
