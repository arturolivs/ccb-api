import { faker } from '@faker-js/faker'
import { TChurch } from '../../models/church.entity'

type ChurchDataBuilderProps = {
  locale?: string
  cd_address?: string
}

export function churchDataBuilder(props: ChurchDataBuilderProps): TChurch {
  return {
    locale: props.locale ?? faker.location.city(),
    cd_address: props.locale ?? faker.location.buildingNumber(),
  }
}
