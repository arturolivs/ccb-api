import { Entity } from './entity'

export type ChurchProps = {
  locale: string
  cd_address: string
}

export class ChurchEntity extends Entity<ChurchProps> {
  constructor(
    public readonly props: ChurchProps,
    id?: string,
  ) {
    super(props, id)
  }
}
