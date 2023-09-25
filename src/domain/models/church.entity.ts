import { EntityValidationError } from '../errors/validation-error'
import { Entity, EntityProps } from './entity'
import ChurchValidationService from './validators/church/church.validator'

export interface ChurchProps extends EntityProps {
  locale: string
  cd_address: string
}

export class Church extends Entity<ChurchProps> {
  constructor(
    public readonly props: ChurchProps,
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
