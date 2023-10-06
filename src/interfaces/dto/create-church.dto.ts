import { CreateChurchInput } from '@/application/usecases/church/create-church.usecase'

export class CreateChurchDto implements CreateChurchInput {
  locale: string
  cd_address: string
}
