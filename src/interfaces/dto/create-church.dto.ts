import { CreateChurchInput } from '@/application/use-cases/church/create-church.use-case'

export class CreateChurchDto implements CreateChurchInput {
  locale: string
  cd_address: string
}
