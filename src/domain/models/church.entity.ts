import { EntityValidationError } from '../errors/validation-error'
import ChurchValidationService from '../validators/church/church.validator'
import { Entity, TEntity } from './entity'

export type TChurch = TEntity & {
  locale: string
  cd_address: string
}

export class ChurchEntity extends Entity<TChurch> {
  constructor(
    public readonly props: TChurch,
    id?: string,
  ) {
    super(props, id)
    this.validateProps()
  }

  public validateProps() {
    const churchValidator = new ChurchValidationService()

    if (!churchValidator.validate(this.props)) {
      throw new EntityValidationError(churchValidator.errors)
    }
  }
}
