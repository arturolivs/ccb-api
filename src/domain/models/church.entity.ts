import { EntityValidationError } from '../errors/validation-error'
import ChurchValidator from '../validators/church/church.validator'
import { Entity, EntityProps } from './entity'

export type ChurchBaseProps = {
  locale: string
  cd_address: string
}

export type ChurchProps = EntityProps & ChurchBaseProps

export class ChurchEntity extends Entity<ChurchProps> {
  constructor(
    public readonly props: ChurchProps,
    id?: string,
  ) {
    super(props, id)
    this.validateProps()
  }

  public validateProps() {
    const validator = new ChurchValidator()

    if (!validator.validate(this.props)) {
      throw new EntityValidationError(validator.errors)
    }
  }
}
