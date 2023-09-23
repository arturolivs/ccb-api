import { faker } from '@faker-js/faker'
import { ChurchProps } from '../../church.entity'

type Props = {
  locale?: string
  cd_address?: string
}

export function ChurchDataBuilder(props: Props): ChurchProps {
  return {
    locale: props.locale ?? faker.location.city(),
    cd_address: props.locale ?? faker.location.buildingNumber(),
  }
}
